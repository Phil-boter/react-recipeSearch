const express = require("express");
const app = express();
const path = require("path");
const compression = require("compression");
const db = require("./database/db.js");
const cookieSession = require("cookie-session");
const csurf = require("csurf");
const { default: axios } = require("axios");
const { hash, compare } = require("./bc");
const { send } = require("process");

app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: false }));
app.use(compression());

const cookieSessionMiddleware = cookieSession({
    secret: `I'm always angry.`,
    maxAge: 1000 * 60 * 60 * 24 * 14,
});

// must be after cookiesession
app.use(cookieSessionMiddleware);

app.use(csurf());

app.use(function (req, res, next) {
    res.cookie("mytoken", req.csrfToken());
    next();
});

// >>>> secrets for heroku <<<<

let secrets;
if (process.env.NODE_ENV == "production") {
    secrets = process.env; // in prod the secrets are environment variables
} else {
    secrets = require("../secrets.json"); // in dev they are in secrets.json which is listed in .gitignore
}

// >>>>--------------------<<<<

// app.get("/api", (req, res) => {
//     console.log("get");
//     res.json({
//         message: "hello world",
//     });
// });

app.use(express.static(path.join(__dirname, "..", "client", "public")));

app.post("/registration", (req, res) => {
    console.log("req.body /register: ", req.body);
    const { first, last, email, password } = req.body;
    console.log("first", first, last);
    hash(password)
        .then((hashed_password) => {
            db.addUser(first, last, email, hashed_password)
                .then(({ rows }) => {
                    console.log("userdata is stored");
                    req.session.userId = rows[0].id;
                    res.json({
                        success: true,
                        userId: req.session.userId,
                    });
                })
                .catch((error) => {
                    console.log("error registration", error);
                    // res.redirect("/registration");
                    res.json({ success: false });
                });
        })
        .catch((error) => {
            console.log("error registration", error);
            // res.redirect("/registration");
            res.json({ success: false });
        });
});

app.post("/login", (req, res) => {
    console.log("get login");
    console.log("req in login", req.body);
    if (req.body.email == "") {
        res.json({ success: false });
    } else if (req.body.password == "") {
        res.json({ success: false });
    } else if (req.body.password != "") {
        let email = req.body.email;
        db.getHashedPassword(email)
            .then(({ rows }) => {
                let userId = rows[0].id;
                compare(req.body.password, rows[0].password)
                    .then((result) => {
                        if (result) {
                            console.log("user is logged in");
                            req.session.userId = userId;
                            res.json({
                                success: true,
                                id: rows[0].id,
                                first: rows[0].first,
                                last: rows[0].last,
                                image: rows[0].image,
                                bio: rows[0].bio,
                            });
                        } else {
                            console.log("error in compare getHashedPassword");
                            res.json({ success: false });
                        }
                    })
                    .catch((error) => {
                        console.log("error match", error);
                        res.json({ success: false }).send();
                    });
            })
            .catch((error) => {
                console.log("error match", error);
                res.json({ success: false }).send();
            });
    } else {
        console.log("error in logIn post");
        res.json({ success: false }).send();
    }
});

app.get("/user", (req, res) => {
    console.log("get user");
    // console.log("req session", req.session);
    db.getUserData(req.session.userId)
        .then(({ rows }) => {
            res.json({
                success: true,
                id: rows[0].id,
                first: rows[0].first,
                last: rows[0].last,
                image: rows[0].image,
                bio: rows[0].bio,
            });
        })
        .catch((error) => {
            console.log("error in getUserData", error);
            res.json({ success: false });
        });
});

app.get("/logout", (req, res) => {
    console.log("userId logout before", req.session.userId);
    req.session = null;
    console.log("userId logout after", req.session);
    res.redirect("/");
});

app.post("/deleteAccount", (req, res) => {
    console.log("post delete Account");
    const { userId } = req.session;
    db.deleteFavRecipe(userId)
        .then(() => {
            console.log("all recipes deleted");
            db.deleteFavRestaurant(userId)
                .then(() => {
                    console.log("all restaurants deleted");
                    return db
                        .deleteAccount(userId)
                        .then((response) => {
                            console.log("delete User resolved", response);
                            res.json({ success: true });
                        })
                        .catch((error) => {
                            console.log("error in deleteAccount", error);
                            res.json({ success: false });
                        });
                })
                .catch((error) => {
                    console.log("error in delete restaurant", error);
                    res.json({ success: false });
                });
        })
        .catch((error) => {
            console.log("error in deleterecipe", error);
            res.json({ success: false });
        });
});

app.post("/saveRestaurant", (req, res) => {
    console.log("post saveRestaurant");
    // console.log("req.body.restaurant", req.body);
    // console.log("req query", req.query);
    // console.log("req.session:", req.session.userId);
    const { name, url, image_url, price, rating, categories, phone } = req.body;
    let userId = req.session.userId;
    db.saveFavoriteRestaurant(
        name,
        url,
        image_url,
        price,
        rating,
        categories,
        phone,
        req.body.location.display_address,
        userId
    )
        .then(() => {
            console.log("save restaurant success");
            res.json({
                success: true,
            }).send();
        })
        .catch((error) => {
            console.log("error in saveFavoriteRestaurant", error);
            res.json({ success: false }).send();
        });
});

app.get("/getFavoriteRestaurant", (req, res) => {
    console.log("getFavRestaurant");
    let userId = req.session.userId;
    db.getFavoriteRestaurant(userId)
        .then(({ rows }) => {
            // console.log("rows", rows);
            res.json({
                success: true,
                favoriteRestaurant: rows,
            });
        })
        .catch((error) => {
            console.log("error in getFavoriteRestaurant", error);
            res.json({ success: false });
        });
});

app.post("/deleteFavRestaurant", (req, res) => {
    console.log("post deleteFavRecipe");

    const { id } = req.body;
    const { userId } = req.session;

    db.deleteRestaurant(id, userId)
        .then(() => {
            console.log("deleted");
            res.json({ successDelete: true }).send();
        })
        .catch((error) => {
            console.log("error in deleteFavRecipe", error);
            res.json({ successDelete: false }).send();
        });
});

app.post("/saveRecipe", (req, res) => {
    console.log("post saveRecipe");
    const { uri, label, url, source, image, yield } = req.body.recipe;
    let userId = req.session.userId;
    db.saveFavoriteRecipe(
        uri,
        label,
        url,
        source,
        image,
        req.body.recipe.ingredientLines,
        yield,
        req.body.recipe.healthLabels,
        req.body.recipe.cautions,
        userId
    )
        .then(() => {
            res.json({
                success: true,
            });
        })
        .catch((error) => {
            console.log("error in saveFavoriteRecipe", error);
            res.json({ success: false });
        });
});

app.get("/getFavoriteRecipe", (req, res) => {
    console.log("getRecipe");
    let userId = req.session.userId;
    db.getFavoriteRecipe(userId)
        .then(({ rows }) => {
            res.json({
                success: true,
                favoriteRecipe: rows,
            });
        })
        .catch((error) => {
            console.log("error in getFavoriteRecipe", error);
            res.json({ success: false });
        });
});

app.post("/deleteFavRecipe", (req, res) => {
    console.log("post deleteFavRecipe");

    const { id } = req.body;
    const { userId } = req.session;

    db.deleteRecipe(id, userId)
        .then(() => {
            console.log("deleted");
            res.json({ successDelete: true }).send();
        })
        .catch((error) => {
            console.log("error in deleteFavRecipe", error);
            res.json({ successDelete: false }).send();
        });
});

// ------  api call dont touch--------------------------------------------------------------------------

app.get("/api/getRecipe/:input", (req, res) => {
    console.log("GET getRecipe");
    // console.log("req:", req);
    let response;
    async function getRecipes(input) {
        console.log("input", input);
        try {
            response = await axios.get(
                `https://api.edamam.com/search?q=${input}&app_id=${secrets.APP_ID}&app_key=${secrets.APP_KEY}`
            );

            // console.log("result getRecipe", response);
            // console.log("hits:", response.data.hits);
            res.json({
                success: true,
                recipes: response.data.hits.map((obj) => ({
                    ...obj,
                    isVisible: false,
                })),
            });
        } catch (error) {
            console.log("error in getRecipe", error);
            res.json({ success: false }).send();
        }
        return response;
    }
    getRecipes(req.params.input);
});

app.get(`/api/getRestaurant/`, (req, res) => {
    console.log("GET getRestaurant");
    console.log("term restaurant:", req.query.term);
    console.log("location restaurant:", req.query.location);
    const { term, location, sortBy } = req.query;
    const apiKey = secrets.apiKey;
    let response;
    async function search(term, location, sortBy) {
        try {
            response = await axios.get(
                `https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
                {
                    headers: {
                        Authorization: `Bearer ${apiKey}`,
                    },
                }
            );

            console.log("result getRecipe", response);
            console.log("businesses:", response.data.businesses);
            res.json({
                success: true,
                businesses: response.data.businesses.map((obj) => ({
                    ...obj,
                    isVisible: false,
                })),
            });
        } catch (error) {
            console.log("error in getRecipe", error);
            res.send({ success: false });
        }
        return response;
    }
    search(term, location, sortBy);
});

// --------------------------------------------------------------------------------------------------

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "..", "client", "index.html"));
});

app.listen(process.env.PORT || 3001, function () {
    console.log("I'm listening.");
});

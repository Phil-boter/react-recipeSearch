const express = require("express");
const app = express();
const path = require("path");
const compression = require("compression");
const db = require("./database/db.js");
const cookieSession = require("cookie-session");
const csurf = require("csurf");
const { default: axios } = require("axios");

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
            res.json({ success: false });
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
            res.json({ success: false });
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

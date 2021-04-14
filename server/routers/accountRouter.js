const express = require("express");
const router = express.Router();

const { hash, compare } = require("../bc");
const db = require("../database/db");

router.post("/registration", (req, res) => {
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
                    res.json({ success: false });
                });
        })
        .catch((error) => {
            console.log("error registration", error);
            res.json({ success: false });
        });
});

router.post("/login", (req, res) => {
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

router.get("/user", (req, res) => {
    console.log("get user");
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

router.get("/logout", (req, res) => {
    console.log("userId logout before", req.session.userId);
    req.session = null;
    console.log("userId logout after", req.session);
    res.redirect("/");
});

router.post("/deleteAccount", (req, res) => {
    console.log("post delete Account");
    const { userId } = req.session;
    db.deleteFavRecipe(userId)
        .then(() => {
            console.log("recipe deleted");
            db.deleteAllUserNotes(userId)
                .then(() => {
                    console.log("all recipes deleted");
                    db.deleteFavRestaurant(userId)
                        .then(() => {
                            db.deleteAllUserNotesRestaurant(userId)
                                .then(() => {
                                    console.log("all restaurants deleted");
                                    return db
                                        .deleteAccount(userId)
                                        .then((response) => {
                                            console.log(
                                                "delete User resolved",
                                                response
                                            );
                                            res.json({ success: true });
                                        })
                                        .catch((error) => {
                                            console.log(
                                                "error in deleteAccount",
                                                error
                                            );
                                            res.json({ success: false });
                                        });
                                })
                                .catch((error) => {
                                    console.log(
                                        "error in delete restaurantNotes",
                                        error
                                    );
                                    res.json({ success: false });
                                });
                        })
                        .catch((error) => {
                            console.log("error in delete restaurant", error);
                            res.json({ success: false });
                        });
                })
                .catch((error) => {
                    console.log("error in delete recipe note", error);
                    res.json({ successDelete: false }).send();
                });
        })
        .catch((error) => {
            console.log("error in deleterecipe", error);
            res.json({ success: false });
        });
});

module.exports = router;

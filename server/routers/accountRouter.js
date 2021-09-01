const express = require("express");
const router = express.Router();

const { hash, compare } = require("../bc");
const db = require("../database/db");

router.post("/registration", async (req, res) => {
    console.log("req.body /register: ");
    const { first, last, email, password } = req.body;
    console.log("first", first, last);
    try {
        let hashed_password = await hash(password);
        const { rows } = await db.addUser(first, last, email, hashed_password);
        console.log("userdata is stored");
        req.session.userId = rows[0].id;
        res.json({
            success: true,
            userId: req.session.userId,
        });
    } catch (error) {
        console.log("error registration", error);
        res.json({ success: false });
    }
});

router.post("/login", async (req, res) => {
    console.log("get login");
    console.log("req in login", req.body);
    if (req.body.email == "") {
        res.json({ success: false });
    } else if (req.body.password == "") {
        res.json({ success: false });
    } else if (req.body.password != "") {
        try {
            let email = req.body.email;
            const { rows } = await db.getHashedPassword(email);
            let userId = rows[0].id;
            let result = await compare(req.body.password, rows[0].password);
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
                console.log("login false");
                res.json({ success: false });
            }
        } catch (error) {
            console.log("error in logIn post");
            res.json({ success: false });
        }
    }
});

router.get("/user", async (req, res) => {
    console.log("get user");
    try {
        const { rows } = await db.getUserData(req.session.userId);
        res.json({
            success: true,
            id: rows[0].id,
            first: rows[0].first,
            last: rows[0].last,
            image: rows[0].image,
            bio: rows[0].bio,
        });
    } catch (error) {
        console.log("error in getUserData", error);
        res.json({ success: false });
    }
});

router.get("/logout", (req, res) => {
    try {
        req.session = null;
        res.redirect("/");
    } catch (error) {
        console.log("error", error);
    }
});

router.post("/deleteAccount", async (req, res) => {
    console.log("post delete Account");
    const { userId } = req.session;

    try {
        await db.deleteFavRecipe(userId);
        await db.deleteAllUserNotes(userId);
        await db.deleteFavRestaurant(userId);
        await db.deleteAllUserNotesRestaurant(userId);
        await db.deleteAccount(userId);
        res.json({ success: true });
    } catch (error) {
        console.log("error in deleteAccount", error);
        res.json({ success: false });
    }
});

module.exports = router;

const express = require("express");
const router = express.Router();

const db = require("../database/db");

router.post("/saveRestaurant", (req, res) => {
    console.log("post saveRestaurant");
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
        .then(({ rows }) => {
            console.log("save restaurant success");
            res.json({
                success: true,
                favoriteRestaurant: rows,
            }).send();
        })
        .catch((error) => {
            console.log("error in saveFavoriteRestaurant", error);
            res.json({ success: false }).send();
        });
});

router.get("/getFavoriteRestaurant", (req, res) => {
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

router.post("/deleteFavRestaurant", (req, res) => {
    console.log("post deleteFavRestaurnat", req.body.id);
    const { id } = req.body;
    const { userId } = req.session;
    db.deleteRestaurant(id, userId)
        .then(({ rows }) => {
            console.log("deleted", rows);
            res.json({ success: true }).send();
        })
        .catch((error) => {
            console.log("error in deleteFavRecipe", error);
            res.json({ success: false }).send();
        });
});

module.exports = router;

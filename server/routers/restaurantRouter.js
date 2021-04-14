const express = require("express");
const router = express.Router();

const db = require("../database/db");

router.post("/saveRestaurant", async (req, res) => {
    console.log("post saveRestaurant");
    const { name, url, image_url, price, rating, categories, phone } = req.body;
    let userId = req.session.userId;
    try {
        const { rows } = await db.saveFavoriteRestaurant(
            name,
            url,
            image_url,
            price,
            rating,
            categories,
            phone,
            req.body.location.display_address,
            userId
        );
        console.log("save restaurant success");
        res.json({
            success: true,
            favoriteRestaurant: rows,
        });
    } catch (error) {
        console.log("error in saveFavoriteRestaurant", error);
        res.json({ success: false }).send();
    }
});

router.get("/getFavoriteRestaurant", async (req, res) => {
    console.log("getFavRestaurant");
    let userId = req.session.userId;
    try {
        const { rows } = await db.getFavoriteRestaurant(userId);
        res.json({
            success: true,
            favoriteRestaurant: rows,
        });
    } catch (error) {
        console.log("error in getFavoriteRestaurant", error);
        res.json({ success: false });
    }
});

router.post("/deleteFavRestaurant", async (req, res) => {
    console.log("post deleteFavRestaurnat", req.body.id);
    const { id } = req.body;
    const { userId } = req.session;
    try {
        await db.deleteRestaurant(id, userId);
        res.json({ success: true });
    } catch (error) {
        console.log("error in deleteFavRecipe", error);
        res.json({ success: false });
    }
});

router.get("/searchForRestaurant/:input", async (req, res) => {
    console.log("get request searechForRestaurant");
    let input = req.params.input;
    let userId = req.session.userId;
    try {
        const { rows } = await db.searchForRestaurant(userId, input);
        // console.log("rows", rows);
        res.json({
            success: true,
            searchRestaurant: rows,
        });
    } catch (error) {
        console.log("error in searchForRestaurant", error);
        res.json({ success: false });
    }
});

module.exports = router;

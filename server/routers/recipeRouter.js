const express = require("express");
const router = express.Router();

const db = require("../database/db");

router.post("/saveRecipe", async (req, res) => {
    console.log("post saveRecipe");
    const { uri, label, url, source, image, yield } = req.body.recipe;
    let userId = req.session.userId;

    try {
        const { rows } = await db.saveFavoriteRecipe(
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
        );
        console.log("fsvourite recipe", rows);
        res.json({
            success: true,
            favoriteRecipe: rows,
        });
    } catch (error) {
        console.log("error in saveFavoriteRecipe", error);
        res.json({ success: false });
    }
});

router.get("/getFavoriteRecipe", async (req, res) => {
    console.log("getRecipe");
    let userId = req.session.userId;

    try {
        const { rows } = await db.getFavoriteRecipe(userId);
        res.json({
            success: true,
            favoriteRecipe: rows,
        });
    } catch (error) {
        console.log("error in getFavoriteRecipe", error);
        res.json({ success: false });
    }
});

router.post("/deleteFavRecipe", async (req, res) => {
    console.log("post deleteFavRecipe");
    const { id } = req.body;
    const { userId } = req.session;
    try {
        await db.deleteRecipe(id, userId);
        await db.deleteRecipeNote(id, userId);
        res.json({ success: true });
    } catch (error) {
        console.log("error in deleteFavRecipe", error);
        res.json({ success: false });
    }
});

router.get("/searchForRecipe/:input", async (req, res) => {
    console.log("get request searechForRecipe");
    let input = req.params.input;
    let userId = req.session.userId;
    try {
        const { rows } = await db.searchForRecipe(userId, input);
        console.log("searchResult ", rows);
        res.json({
            success: true,
            searchResult: rows,
        });
    } catch (error) {
        console.log("error in searchForRecipe", error);
        res.json({ success: false }).send();
    }
});

module.exports = router;

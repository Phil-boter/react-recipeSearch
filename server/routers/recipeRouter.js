const express = require("express");
const router = express.Router();

const db = require("../database/db");

router.post("/saveRecipe", (req, res) => {
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

router.get("/getFavoriteRecipe", (req, res) => {
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

router.post("/deleteFavRecipe", (req, res) => {
    console.log("post deleteFavRecipe");
    console.log("recipeId ", req.body.id);
    const { id } = req.body;
    const { userId } = req.session;

    db.deleteRecipe(id, userId)
        .then(() => {
            db.deleteRecipeNote(id, userId)
                .then(({ rows }) => {
                    console.log("deleted", rows);
                    res.json({ successDelete: true }).send();
                })
                .catch((error) => {
                    console.log("error in delete recipe note", error);
                    res.json({ successDelete: false }).send();
                });
        })
        .catch((error) => {
            console.log("error in deleteFavRecipe", error);
            res.json({ successDelete: false }).send();
        });
});

router.get("/searchForRecipe/:input", (req, res) => {
    console.log("get request searechForRecipe");
    let input = req.params.input;
    let userId = req.session.userId;
    db.searchForRecipe(userId, input)
        .then(({ rows }) => {
            res.json({
                success: true,
                searchResult: rows,
            });
        })
        .catch((error) => {
            console.log("error in searchForRecipe", error);
            res.json({ success: false }).send();
        });
});

module.exports = router;

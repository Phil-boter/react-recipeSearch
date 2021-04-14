const express = require("express");
const router = express.Router();

const db = require("../database/db");

router.get("/searchForRestaurant/:input", (req, res) => {
    console.log("get request searechForRestaurant");
    let input = req.params.input;
    let userId = req.session.userId;
    db.searchForRestaurant(userId, input)
        .then(({ rows }) => {
            console.log("rows", rows);
            res.json({
                success: true,
                searchRestaurant: rows,
            });
        })
        .catch((error) => {
            console.log("error in searchForRestaurant", error);
            res.json({ success: false }).send();
        });
});

router.post("/sendNoteRecipe", (req, res) => {
    let note = req.body.note;
    let userId = req.session.userId;
    let recipeId = req.body.recipeId;

    db.saveNoteRecipe(note, userId, recipeId)
        .then(({ rows }) => {
            console.log("note saved");
            res.json({
                success: true,
                recipeNote: rows,
            });
        })
        .catch((error) => {
            console.log("error in saveNoteRecipe", error);
            res.json({
                success: false,
            });
        });
});

router.get("/getRecipeNote", (req, res) => {
    let recipeId = req.query.recipeId;
    db.getRecipeNote(recipeId)
        .then(({ rows }) => {
            console.log("rows in getRecipeNotes", rows);
            res.json({
                success: true,
                recipeNote: rows,
            });
        })
        .catch((error) => {
            console.log("error in get recipe note", error);
            res.json({ success: false }).send();
        });
});

router.post("/deleteSingleRecipeNote", (req, res) => {
    let recipeNotesId = req.body.recipeNotesId;
    db.deleteSingleRecipeNote(recipeNotesId)
        .then(({ rows }) => {
            console.log("delete recipe note success", rows);
            res.json({
                success: true,
                recipeNote: rows,
            }).send();
        })
        .catch((error) => {
            console.log("error in deleteSingleRecipe", error);
            res.json({
                success: false,
            });
        });
});

module.exports = router;

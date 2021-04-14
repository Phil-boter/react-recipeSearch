const express = require("express");
const router = express.Router();

const db = require("../database/db");

router.post("/sendNoteRecipe", async (req, res) => {
    let note = req.body.note;
    let userId = req.session.userId;
    let recipeId = req.body.recipeId;
    console.log("note", note);
    try {
        const recipeNote = await db.saveNoteRecipe(note, userId, recipeId);
        res.json({
            success: true,
            recipeNote: recipeNote.rows,
        });
    } catch (error) {
        console.log("error in saveNoteRecipe", error);
        res.json({
            success: false,
        });
    }
});

router.get("/getRecipeNote", async (req, res) => {
    let recipeId = req.query.recipeId;

    try {
        const recipeNote = await db.getRecipeNote(recipeId);
        res.json({
            success: true,
            recipeNote: recipeNote.rows,
        });
    } catch (error) {
        console.log("error in get recipe note", error);
        res.json({ success: false });
    }
});

router.post("/deleteSingleRecipeNote", async (req, res) => {
    let recipeNotesId = req.body.recipeNotesId;

    try {
        const { rows } = await db.deleteSingleRecipeNote(recipeNotesId);
        res.json({
            success: true,
            recipeNote: rows,
        });
    } catch (error) {
        console.log("error in deleteSingleRecipe", error);
        res.json({
            success: false,
        });
    }
});

module.exports = router;

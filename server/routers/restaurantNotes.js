const express = require("express");
const router = express.Router();

const db = require("../database/db");

router.post("/sendNoteRestaurant", async (req, res) => {
    console.log("post sendNote");
    let note = req.body.note;
    let userId = req.session.userId;
    let restaurantId = req.body.restaurantId;

    try {
        const { rows } = await db.saveNoteRestaurant(
            note,
            userId,
            restaurantId
        );
        res.json({
            success: true,
            restaurantNote: rows,
        });
    } catch (error) {
        console.log("error in saveNoteRestaurant", error);
        res.json({
            success: false,
        });
    }
});

router.get("/getRestaurantNote", async (req, res) => {
    let restaurantId = req.query.restaurantId;
    try {
        const { rows } = await db.getRestaurantNote(restaurantId);
        res.json({
            success: true,
            restaurantNote: rows,
        });
    } catch (error) {
        console.log("error in get restaurant note", error);
        res.json({ success: false });
    }
});

router.post("/deleteSingleRestaurantNote", async (req, res) => {
    console.log("post deleteSingleRestaurantNote");
    let restaurantNotesId = req.body.restaurantNotesId;
    try {
        const { rows } = await db.deleteSingleRestaurantNote(restaurantNotesId);
        res.json({
            success: true,
            restaurantNote: rows,
        }).send();
    } catch (error) {
        console.log("error in deleteSingleRestaurant", error);
        res.json({
            success: false,
        });
    }
});

module.exports = router;

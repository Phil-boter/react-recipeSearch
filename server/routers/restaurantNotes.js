const express = require("express");
const router = express.Router();

const db = require("../database/db");

router.post("/sendNoteRestaurant", (req, res) => {
    console.log("post sendNote");
    console.log("req.body", req.body);
    console.log("userId ", req.session.userId);
    let note = req.body.note;
    let userId = req.session.userId;
    let restaurantId = req.body.restaurantId;

    db.saveNoteRestaurant(note, userId, restaurantId)
        .then(({ rows }) => {
            console.log("note restaurant saved");
            res.json({
                success: true,
                restaurantNote: rows,
            });
        })
        .catch((error) => {
            console.log("error in saveNoteRestaurant", error);
            res.json({
                success: false,
            });
        });
});

router.get("/getRestaurantNote", (req, res) => {
    let restaurantId = req.query.restaurantId;
    db.getRestaurantNote(restaurantId)
        .then(({ rows }) => {
            console.log("rows in getRestaurantNotes", rows);
            res.json({
                success: true,
                restaurantNote: rows,
            });
        })
        .catch((error) => {
            console.log("error in get restaurant note", error);
            res.json({ success: false }).send();
        });
});

router.post("/deleteSingleRestaurantNote", (req, res) => {
    console.log("post deleteSingleRestaurantNote");
    console.log("req.body", req.body);
    let restaurantNotesId = req.body.restaurantNotesId;
    db.deleteSingleRestaurantNote(restaurantNotesId)
        .then(({ rows }) => {
            console.log("delete restaurant note success", rows);
            res.json({
                success: true,
                restaurantNote: rows,
            }).send();
        })
        .catch((error) => {
            console.log("error in deleteSingleRestaurant", error);
            res.json({
                success: false,
            });
        });
});

module.exports = router;

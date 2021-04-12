import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { sendNoteRecipe } from "../redux/actions";

import "../css/Notes.css";

export default function AddNote({ item }) {
    const dispatch = useDispatch();
    const [note, setNote] = useState("");

    const handleNote = (e) => {
        console.log("note entered");
        setNote(e.target.value);
    };

    return (
        <>
            <div className="add-note-container">
                <textarea
                    className="note-text-area"
                    onChange={(e) => handleNote(e)}
                ></textarea>
                <button
                    className="add-note-button"
                    onClick={() => dispatch(sendNoteRecipe(note, item.id))}
                >
                    +
                </button>
            </div>
        </>
    );
}

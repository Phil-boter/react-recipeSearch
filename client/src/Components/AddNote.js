import { useState } from "react";
import { useDispatch } from "react-redux";

import "../css/Notes.css";

export default function AddNote({ item, sendNote }) {
    const dispatch = useDispatch();

    const [note, setNote] = useState("");

    console.log("note", note);
    // const handleNote = (e) => {
    //     setNote(e.target.value);
    // };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(sendNote(note, item.id));
        setNote("");
    };

    return (
        <>
            <div className="add-note-container">
                <textarea
                    className="note-text-area"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                ></textarea>
                <button
                    onClick={(e) => handleSubmit(e)}
                    className="add-note-button"
                >
                    +
                </button>
            </div>
        </>
    );
}

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// import { sendNoteRecipe } from "../redux/actions";

export default function AddNote({ item }) {
    const dispatch = useDispatch();
    const [note, setNote] = useState("");

    const handleNote = (e) => {
        // console.log("note", e.target.value);
        setNote(e.target.value);
    };

    return (
        <>
            <h1>Hello Addnote</h1>
            <textarea onChange={(e) => handleNote(e)}></textarea>
            <button onClick={() => dispatch(sendNoteRecipe(note, item.id))}>
                submit
            </button>
        </>
    );
}

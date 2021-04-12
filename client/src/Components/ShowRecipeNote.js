import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { deleteSingleRecipeNote, getNoteRecipe } from "../redux/actions";

import DeleteSingleRecipeNote from "./DeleteSingleRecipeNote";

export default function ShowRecipeNote({ item }) {
    const dispatch = useDispatch();

    const note = useSelector((state) => {
        console.log("state.recipeNote", state.recipeNote);
        console.log("state", state);
        return state.recipeNote;
    });
    // console.log("note", note);

    useEffect(() => {
        dispatch(getNoteRecipe(item.id));
    }, []);

    return (
        <>
            <h2>Notes:</h2>

            {note &&
                note.map((singleNote, index) => (
                    <div key={index} className="note-list">
                        <p>{singleNote.note}</p>
                        <DeleteSingleRecipeNote
                            singleNote={singleNote}
                            item={item}
                        />
                    </div>
                ))}
        </>
    );
}

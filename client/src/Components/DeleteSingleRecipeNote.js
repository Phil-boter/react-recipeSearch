import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteSingleRecipeNote, getNoteRecipe } from "../redux/actions";

export default function DeleteSingleRecipeNote({ item, singleNote }) {
    const dispatch = useDispatch();

    const [deleted, setDeleted] = useState(false);

    const deleteRecipeNote = (e, id) => {
        console.log("click in delete");
        e.preventDefault();
        dispatch(deleteSingleRecipeNote(id));
        setDeleted(true);
        // dispatch(getNoteRecipe(item.id));
    };

    useEffect(() => {
        dispatch(getNoteRecipe(item.id));
    }, [deleted]);

    return (
        <>
            <button
                className="delete-note-button"
                onClick={(e) => deleteRecipeNote(e, singleNote.id)}
            >
                <div className="delete-note-button-content"></div>
            </button>
        </>
    );
}

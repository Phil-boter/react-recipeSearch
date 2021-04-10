import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { getNoteRecipe } from "../redux/actions";

export default function ShowRecipeNote({ item }) {
    const dispatch = useDispatch();

    const note = useSelector((state) => {
        // console.log("state", state);
        return state.recipeNote;
    });
    console.log("note", note);
    useEffect(() => {
        dispatch(getNoteRecipe(item.id));
    }, []);

    const filterNote = (singleNote) => {
        // console.log("function", singleNote);
        for (const recipeid in singleNote[recipeid]) {
            console.log(`${recipeid}: ${singleNote[recipeid]}`);
        }
    };

    return (
        <>
            <h2>Notes:</h2>
            {note &&
                note.map((singleNote) => (
                    <div key={singleNote.recipeid}>{singleNote.note}</div>
                ))}
        </>
    );
}

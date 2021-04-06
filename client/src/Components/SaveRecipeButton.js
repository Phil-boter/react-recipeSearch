import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { saveRecipe } from "../redux/actions";

export default function SaveRecipeButton({ recipe, index }) {
    const dispatch = useDispatch();

    const [text, setButtonText] = useState("");

    const SaveRecipe = () => {
        dispatch(saveRecipe(recipe));
        setButtonText("Saved");
    };

    useEffect(() => {
        setButtonText("Save to favorites");
    }, []);

    return (
        <>
            <button
                className="main-info-button main-info-button-recipe"
                onClick={() => SaveRecipe()}
            >
                {text}
            </button>
        </>
    );
}

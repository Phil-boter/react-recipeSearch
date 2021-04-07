import { useState } from "react";
import { useDispatch } from "react-redux";
import { getRecipe } from "../redux/actions";

import "../css/GetRecipeData.css";
// import "../css/app.css";

export default function GetRecipeData() {
    const dispatch = useDispatch();

    const [input, setInput] = useState("");

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    return (
        <>
            <div className="recipedata-container">
                <h1 className="search-headline">Shopping list</h1>
                <input
                    className="recipedata-input"
                    type="text"
                    placeholder="What do you want to eat?"
                    onChange={(e) => handleChange(e, input)}
                />

                <button
                    disabled={input.length < 1}
                    className="submit-button"
                    onClick={() => dispatch(getRecipe(input))}
                >
                    start
                </button>
            </div>
        </>
    );
}

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
        <div className="recipedata-container">
            <input
                className="recipedata-input"
                type="text"
                placeholder=" type here"
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
    );
}

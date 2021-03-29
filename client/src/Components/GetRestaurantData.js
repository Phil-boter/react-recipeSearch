import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getRecipe } from "../redux/actions";
import { Link } from "react-router-dom";

import "../css/GetRecipeData.css";
import "../css/app.css";

export default function GetRestaurantData() {
    console.log("GetRestaurantData component");
    // const dispatch = useDispatch();

    // const [input, setInput] = useState("");

    // const handleChange = (e) => {
    //     console.log("input value", e.target.value);
    //     setInput(e.target.Value);
    // };

    return (
        <div className="data-container">
            <input
                className="data-input"
                type="text"
                placeholder="what you want to eat"
                onChange={(e) => handleChange(e)}
            />
            <input
                className="data-input"
                type="text"
                placeholder="what you want to eat"
                onChange={(e) => handleChange(e)}
            />

            <button
                className="submit-button"
                onClick={() => dispatch(getRecipe(input))}
            >
                submit
            </button>
        </div>
    );
}

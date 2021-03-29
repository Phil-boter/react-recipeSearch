import { getRestaurant } from "../redux/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";

import "../css/GetRestaurantData.css";
import "../css/GetRecipeData.css";
import "../css/app.css";

export default function GetRestaurantData() {
    console.log("GetRestaurantData component");

    const dispatch = useDispatch();

    const [term, setRestaurant] = useState("");
    const [location, setCity] = useState("");

    const handleRestaurant = (e) => {
        console.log("input value restaurant", e.target.value);
        setRestaurant(e.target.value);
    };
    const handleCity = (e) => {
        console.log("input value city", e.target.value);
        setCity(e.target.value);
    };

    return (
        <div className="restaurant-container">
            <div className="restaurant-input-container">
                <input
                    className="recipedata-input"
                    type="text"
                    placeholder="what you want to eat"
                    onChange={(e) => handleRestaurant(e)}
                />
            </div>
            <div className="restaurant-input-container">
                <input
                    className="recipedata-input"
                    type="text"
                    placeholder="Where you are?"
                    onChange={(e) => handleCity(e)}
                />
            </div>
            <div className="restaurant-button-container">
                <button
                    disabled={location.length < 1}
                    disabled={term.length < 1}
                    className="submit-button restaurant-button-container"
                    onClick={() => dispatch(getRestaurant(term, location))}
                >
                    submit
                </button>
            </div>
        </div>
    );
}

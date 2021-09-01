import { getRestaurant } from "../redux/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";

import "../css/GetRecipeData.css";

export default function GetRestaurantData() {
    const dispatch = useDispatch();

    const [term, setRestaurant] = useState("");
    const [location, setCity] = useState("");

    const handleRestaurant = (e) => {
        setRestaurant(e.target.value);
    };
    const handleCity = (e) => {
        setCity(e.target.value);
    };

    return (
        <div className="recipedata-container">
            {/* <h1 className="search-headline">Restaurant</h1> */}
            <div className="restaurant-input-container">
                <input
                    className="recipedata-input"
                    type="text"
                    placeholder="What do you want to eat?"
                    onChange={(e) => handleRestaurant(e)}
                />
            </div>
            <div className="restaurant-input-container">
                <input
                    className="recipedata-input"
                    type="text"
                    placeholder="City and Zip-code"
                    onChange={(e) => handleCity(e)}
                />
            </div>
            <div className="restaurant-button-container">
                <button
                    disabled={(location.length, term.length < 1)}
                    className="submit-button restaurant-button-container"
                    onClick={() => dispatch(getRestaurant(term, location))}
                >
                    start
                </button>
            </div>
        </div>
    );
}

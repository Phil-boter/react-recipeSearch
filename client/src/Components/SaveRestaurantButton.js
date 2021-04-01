import React, { Component } from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";

export default function SaveRestaurantButton({
    restaurant,
    renderPhone,
    renderPrice,
    renderRating,
}) {
    console.log("restaurant button runs");

    const [saveRest, setSaveRest] = useState({});

    const SaveRestaurant = () => {
        console.log("click in save restaurant");
        console.log("state saveFavorite", this.state);
        setSaveRest(restaurant, renderPhone, renderPrice, renderRating);
    };

    return (
        <>
            <button
                className="main-info-button main-info-button-recipe"
                onClick={() => SaveRestaurant()}
            >
                {" "}
                Save to favorites
            </button>
        </>
    );
}

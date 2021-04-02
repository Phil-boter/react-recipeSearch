import React, { Component } from "react";
import { useDispatch } from "react-redux";
import { saveRestaurant } from "../redux/actions";

export default function SaveRestaurantButton({ restaurant }) {
    const dispatch = useDispatch();
    console.log("restaurant button runs");

    const SaveRestaurant = () => {
        console.log("click in save restaurant");
        dispatch(saveRestaurant(restaurant));
    };

    return (
        <>
            <button
                className="main-info-button main-info-button-recipe"
                onClick={() => SaveRestaurant()}
            >
                Save to favorites
            </button>
        </>
    );
}

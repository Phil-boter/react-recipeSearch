import React, { Component } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { saveRecipe } from "../redux/actions";

export default function SaveRecipeButton({ recipe, index }) {
    const dispatch = useDispatch();

    const SaveRecipe = () => {
        console.log("click in save recipe");
        console.log("state saveFavorite");
        dispatch(saveRecipe(recipe));
    };

    return (
        <>
            <button
                className="main-info-button main-info-button-recipe"
                onClick={() => SaveRecipe()}
            >
                Save to favorites
            </button>
        </>
    );
}

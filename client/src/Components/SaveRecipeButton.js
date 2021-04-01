import React, { Component } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { saveRecipe } from "../redux/actions";

export default function SaveRecipeButton({ recipe }) {
    const dispatch = useDispatch();

    const success = useSelector((state) => {
        return state.success;
    });

    console.log("saveRecipeButton mounted", recipe);
    console.log("success in saveRecipe", success);

    const SaveRecipe = () => {
        console.log("click in save recipe");
        console.log("state saveFavorite");
        dispatch(saveRecipe(recipe));
    };

    return (
        <>
            {success ? (
                alert(
                    `${recipe.label} is saved in your favorite shopping lists`
                )
            ) : (
                <button
                    className="main-info-button main-info-button-recipe"
                    onClick={() => SaveRecipe()}
                >
                    Save to favorites
                </button>
            )}
        </>
    );
}

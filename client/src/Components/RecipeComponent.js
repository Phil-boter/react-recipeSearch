import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import RecipeModal from "./RecipeModal";
import IsLoadingComponent from "../Components/IsLoadingComponent";

import "../css/RecipeComponent.css";
import SingleRecipe from "./SingleRecipe";

export default function RecipeComponent({ userId }) {
    console.log("RecipeComponent mounted");

    const recipes = useSelector((state) => {
        console.log("state in RecipeComponent");
        return state.recipes;
    });

    console.log("recipes", recipes);

    return (
        <>
            <h1 className="search-headline">Your suggestions</h1>
            <div className="main-display">
                {recipes && recipes.lenght != 0 ? (
                    recipes.map((recipe, index) => (
                        <SingleRecipe
                            key={index}
                            recipe={recipe}
                            index={index}
                        />
                    ))
                ) : (
                    <div className="loading-container">
                        <IsLoadingComponent />
                    </div>
                )}
            </div>
        </>
    );
}

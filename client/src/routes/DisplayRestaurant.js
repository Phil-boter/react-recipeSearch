import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "../css/DisplayRecipe.css";
import "../css/app.css";
import "../css/RecipeComponent.css";

import TopLinks from "../Components/TopLinks";
import GetRestaurantData from "../Components/GetRestaurantData";
import NavigationComponent from "../Components/NavigationComponent";
import IsLoadingComponent from "../Components/IsLoadingComponent";

export default function DisplayRecipe() {
    console.log("DisplayRecipe component");

    const recipe = useSelector((state) => {
        console.log("state in displayRecipe", state);
        return state.recipe;
    });

    console.log("recipe", recipe);

    return (
        <>
            <NavigationComponent />
            <div>
                <TopLinks />
            </div>
            <div>
                <GetRestaurantData />
            </div>
            {recipe && recipe.lenght != 0 ? (
                <>
                    <h1>Restaurant Component</h1>
                </>
            ) : (
                <IsLoadingComponent />
            )}
        </>
    );
}

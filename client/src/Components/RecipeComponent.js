import { useSelector } from "react-redux";

import IsLoadingComponent from "../Components/IsLoadingComponent";
import SingleRecipe from "./SingleRecipe";

import "../css/RecipeComponent.css";

export default function RecipeComponent() {
    const recipes = useSelector((state) => {
        return state.recipes;
    });

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

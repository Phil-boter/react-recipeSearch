import "../css/DisplayRecipe.css";
import "../css/app.css";

import TopLinks from "../Components/TopLinks";
import GetRecipeData from "../Components/GetRecipeData";
import RecipeComponent from "../Components/RecipeComponent";
import NavigationComponent from "../Components/NavigationComponent";

export default function DisplayRecipe() {
    console.log("DisplayRecipe route");

    return (
        <>
            <NavigationComponent />
            <TopLinks />
            <GetRecipeData />
            <RecipeComponent />
        </>
    );
}

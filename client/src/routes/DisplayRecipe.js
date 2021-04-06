import TopLinks from "../Components/TopLinks";
import GetRecipeData from "../Components/GetRecipeData";
import RecipeComponent from "../Components/RecipeComponent";
import NavigationComponent from "../Components/NavigationComponent";
import ScrollToTopButton from "../Components/ScrollToTopButton";

export default function DisplayRecipe() {
    return (
        <>
            <NavigationComponent />
            <TopLinks />
            <GetRecipeData />
            <RecipeComponent />
            <ScrollToTopButton />
        </>
    );
}

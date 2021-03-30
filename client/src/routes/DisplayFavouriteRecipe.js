import BackToMainPage from "../Components/BackToMainPage";
import TopLinks from "../Components/TopLinks";
import NavigationComponent from "../Components/NavigationComponent";
import FavouriteRecipeComponent from "../Components/FavouriteRecipeComponent";

export default function DisplayFavouriteRecipe() {
    return (
        <>
            <NavigationComponent />
            <TopLinks />
            <BackToMainPage />
            <FavouriteRecipeComponent />
        </>
    );
}

import BackToMainPage from "../Components/BackToMainPage";
import TopLinks from "../Components/TopLinks";
import NavigationComponent from "../Components/NavigationComponent";
import FavoriteRecipeComponent from "../Components/FavoriteRecipeComponent";
import ScrollToTopButton from "../Components/ScrollToTopButton";

export default function DisplayFavoriteRecipe() {
    return (
        <>
            <NavigationComponent />
            <TopLinks />
            <BackToMainPage />
            <FavoriteRecipeComponent />
            <ScrollToTopButton />
        </>
    );
}

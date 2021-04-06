import BackToMainPage from "../Components/BackToMainPage";
import TopLinks from "../Components/TopLinks";
import NavigationComponent from "../Components/NavigationComponent";
import FavoriteRestaurantComponent from "../Components/FavoriteRestaurantComponent";
import ScrollToTopButton from "../Components/ScrollToTopButton";

export default function DisplayFavouriteRestaurant() {
    return (
        <>
            <NavigationComponent />
            <TopLinks />
            <BackToMainPage />
            <FavoriteRestaurantComponent />
            <ScrollToTopButton />
        </>
    );
}

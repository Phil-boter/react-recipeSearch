import BackToMainPage from "../Components/BackToMainPage";
import TopLinks from "../Components/TopLinks";
import NavigationComponent from "../Components/NavigationComponent";
import FavouriteRestaurantComponent from "../Components/FavouriteRestaurantComponent";

export default function DisplayFavouriteRestaurant() {
    return (
        <>
            <NavigationComponent />
            <TopLinks />
            <BackToMainPage />
            <FavouriteRestaurantComponent />
        </>
    );
}

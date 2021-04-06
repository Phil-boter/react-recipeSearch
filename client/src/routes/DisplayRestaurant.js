import TopLinks from "../Components/TopLinks";
import GetRestaurantData from "../Components/GetRestaurantData";
import NavigationComponent from "../Components/NavigationComponent";
import RestaurantComponent from "../Components/RestaurantComponent";
import ScrollToTopButton from "../Components/ScrollToTopButton";

export default function DisplayRecipe() {
    return (
        <>
            <NavigationComponent />
            <TopLinks />
            <GetRestaurantData />
            <RestaurantComponent />
            <ScrollToTopButton />
        </>
    );
}

import "../css/DisplayRecipe.css";
import "../css/app.css";
import "../css/RecipeComponent.css";

import TopLinks from "../Components/TopLinks";
import GetRestaurantData from "../Components/GetRestaurantData";
import NavigationComponent from "../Components/NavigationComponent";
import RestaurantComponent from "../Components/RestaurantComponent";

export default function DisplayRecipe() {
    console.log("DisplayRestaurant route");

    return (
        <>
            <NavigationComponent />
            <TopLinks />
            <GetRestaurantData />
            <RestaurantComponent />
        </>
    );
}

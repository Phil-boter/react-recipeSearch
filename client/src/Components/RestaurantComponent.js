import { useSelector } from "react-redux";

import IsLoadingComponent from "./IsLoadingComponent";
import SingleRestaurant from "./SingleRestaurant";

// import "../css/DisplayRecipe.css";
// import "../css/app.css";
// import "../css/RecipeComponent.css";

export default function RestaurantComponent() {
    const restaurants = useSelector((state) => {
        return state.restaurants;
    });

    return (
        <>
            <h1 className="search-headline">Your suggestions</h1>
            <div className="main-display">
                {restaurants && restaurants.lenght != 0 ? (
                    restaurants.map((restaurant, index) => (
                        <SingleRestaurant
                            key={index}
                            restaurant={restaurant}
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

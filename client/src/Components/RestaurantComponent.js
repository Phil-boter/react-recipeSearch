import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "../css/DisplayRecipe.css";
import "../css/app.css";
import "../css/RecipeComponent.css";

export default function RestaurantComponent() {
    console.log("Restaurantcomponent mounted");

    // const restaurant = useSelector((state) => {
    //     console.log("state in RestaurantComponent", state);
    //     return state;
    // });

    return (
        <>
            <h1 className="search-headline">Your suggestions</h1>
            {/* <div className="main-display">
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
            </div> */}
        </>
    );
}

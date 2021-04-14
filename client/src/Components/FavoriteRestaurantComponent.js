import { useDispatch, useSelector } from "react-redux";
import { getFavoriteRestaurant } from "../redux/actions";
import { useEffect } from "react";

import IsLoadingComponent from "./IsLoadingComponent";
import SearchFavRestaurant from "./SearchFavRestaurant";
import SingleFavRestaurant from "./SingleFavRestaurant";

import "../css/FavComponent.css";

export default function FavoriteRestaurantComponent() {
    const dispatch = useDispatch();

    const favoriteRestaurant = useSelector((state) => {
        // console.log("state in fav restaurant", state);
        // console.log("state.data", state.data);
        return state.data;
    });
    useEffect(() => {
        dispatch(getFavoriteRestaurant());
    }, []);

    return (
        <>
            <h1 className="search-headline">Your favourite Restaurants</h1>
            <SearchFavRestaurant />
            <div className="main-display">
                <div className="single-recipe-container">
                    {favoriteRestaurant === undefined ||
                    favoriteRestaurant.favoriteRestaurant === undefined ||
                    favoriteRestaurant.favoriteRestaurant.length == 0 ? (
                        <div className="loading-container">
                            <IsLoadingComponent />
                        </div>
                    ) : (
                        favoriteRestaurant.favoriteRestaurant.map(
                            (restaurant, index) => (
                                <div key={index}>
                                    <SingleFavRestaurant
                                        restaurant={restaurant}
                                    />
                                </div>
                            )
                        )
                    )}
                </div>
            </div>
        </>
    );
}

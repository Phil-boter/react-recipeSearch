import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFavoriteRestaurant } from "../redux/actions";
import { useEffect, useState } from "react";

import IsLoadingComponent from "./IsLoadingComponent";
import DeleteFavoriteRestaurantButton from "./DeleteFavoriteRestaurantButton";

export default function FavoriteRestaurantComponent() {
    // console.log("FavoriteRestaurantComponent mounted");
    // console.log("restaurant, index", restaurant, index);
    const dispatch = useDispatch();

    const favoriteRestaurant = useSelector((state) => {
        console.log("state.data in RestaurantComponent", state.data);
        return state.data;
    });
    console.log("favorite", favoriteRestaurant);
    useEffect(() => {
        console.log("useEffect fav restaurant");
        dispatch(getFavoriteRestaurant());
    }, []);

    const renderPhone = (phone) => {
        if (!phone) {
            return (
                <>
                    <p>Phone:</p>
                    <p>none provided</p>
                </>
            );
        } else {
            return (
                <>
                    <h4>Phone:</h4>
                    {phone}
                </>
            );
        }
    };
    const renderPrice = (price) => {
        if (!price) {
            return (
                <>
                    <p>Price:</p>
                    <p>none provided</p>
                </>
            );
        } else {
            return (
                <>
                    <h4>Price:</h4>
                    {price}
                </>
            );
        }
    };

    const renderRating = (rating) => {
        if (!rating) {
            return (
                <>
                    <p>Rating:</p>
                    <p>none provided</p>
                </>
            );
        } else {
            return (
                <>
                    <h4>Rating:</h4>
                    {`${rating} Stars`}
                </>
            );
        }
    };

    return (
        <div className="single-recipe-container">
            <h1 className="search-headline">Your Favorites</h1>
            <div className="main-display">
                <div className="single-recipe-container">
                    {!favoriteRestaurant ||
                    favoriteRestaurant.favoriteRestaurant.length == 0 ? (
                        <div className="loading-container">
                            <IsLoadingComponent />
                        </div>
                    ) : (
                        favoriteRestaurant.favoriteRestaurant.map(
                            (restaurant, index) => (
                                <div key={index}>
                                    {restaurant.name}
                                    <div className="image-container">
                                        <img
                                            className="image"
                                            src={restaurant.image}
                                            alt="Image with food"
                                        />
                                    </div>
                                    <h2>{restaurant.name}</h2>
                                    <div className="recipe-information">
                                        {renderPhone(restaurant.phone)}
                                    </div>
                                    <div className="recipe-information">
                                        {renderPrice(restaurant.price)}
                                    </div>
                                    <div className="recipe-information">
                                        {renderRating(restaurant.rating)}
                                    </div>
                                    <div>
                                        <DeleteFavoriteRestaurantButton
                                            restaurant={restaurant}
                                        />
                                    </div>
                                </div>
                            )
                        )
                    )}
                </div>
            </div>
        </div>
    );
}

//     </div>
// ));

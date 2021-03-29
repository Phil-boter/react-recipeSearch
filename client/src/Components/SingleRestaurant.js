import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import RestaurantModal from "../Components/RestaurantModal";

import "../css/SingleRecipe.css";

export default function SingleRestaurant({ restaurant, index }) {
    console.log("singleRestaurantComponent mounted");
    console.log("restaurant, index", restaurant, index);

    const [showModal, setShowModal] = useState(false);

    const toggleShowRecipe = () => {
        console.log("click toggle");
        setShowModal(true);
    };

    const closeShowRecipe = () => {
        console.log("click close modal");
        setShowModal(false);
    };
    console.log("show modal", showModal);

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
            return;
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
            return;
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
        <div className="single-recipe-container" key={index}>
            <div className="image-container" onClick={() => toggleShowRecipe()}>
                <img
                    className="image"
                    src={restaurant.image_url}
                    alt="Image with food"
                />
            </div>
            <h2>{restaurant.name}</h2>
            <div className="recipe-information">
                {renderPhone(restaurant.display_phone)}
            </div>
            <div className="recipe-information">
                {renderPrice(restaurant.price)}
            </div>
            <div className="recipe-information">
                {renderRating(restaurant.rating)}
            </div>
            {showModal && (
                <RestaurantModal
                    restaurant={restaurant}
                    key={restaurant.index}
                    closeShowRecipe={closeShowRecipe}
                    renderPhone={renderPhone(restaurant.display_phone)}
                    renderPrice={renderPrice(restaurant.price)}
                    renderRating={renderRating(restaurant.rating)}
                />
            )}
        </div>
    );
}

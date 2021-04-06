import React from "react";
import { useState } from "react";
import RestaurantModal from "../Components/RestaurantModal";

import "../css/SingleRecipe.css";

export default function SingleRestaurant({ restaurant, index }) {
    const [showModal, setShowModal] = useState(false);

    const toggleShowRecipe = () => {
        setShowModal(true);
    };

    const closeShowRecipe = () => {
        setShowModal(false);
    };

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

    const renderImage = (image) => {
        if (image == "") {
            return (
                <img
                    className="recipe-modal-image"
                    src="/images/rosemary640.jpg"
                    alt="Image with food"
                />
            );
        } else {
            return (
                <img
                    className="recipe-modal-image"
                    src={image}
                    alt="Image with food"
                />
            );
        }
    };

    return (
        <div className="single-recipe-container" key={index}>
            <div className="image-container">
                {renderImage(restaurant.image_url)}
            </div>
            <h2 className="link">
                <a href={restaurant.url} target="_blank">
                    {restaurant.name}
                </a>
            </h2>
            <div className="recipe-information">
                {renderPhone(restaurant.display_phone)}
            </div>
            <div className="recipe-information">
                {renderPrice(restaurant.price)}
            </div>
            <div className="recipe-information">
                {renderRating(restaurant.rating)}
            </div>
            <div className="save-button-container more-info-button">
                <button
                    className="main-info-button click-for-modal main-info-button-recipe"
                    onClick={() => toggleShowRecipe()}
                >
                    More information
                </button>
            </div>
            {showModal && (
                <RestaurantModal
                    restaurant={restaurant}
                    key={restaurant.index}
                    closeShowRecipe={closeShowRecipe}
                    renderPhone={renderPhone(restaurant.display_phone)}
                    renderPrice={renderPrice(restaurant.price)}
                    renderRating={renderRating(restaurant.rating)}
                    renderImage={renderImage(restaurant.image_url)}
                />
            )}
        </div>
    );
}

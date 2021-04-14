import { useState } from "react";

import FavRestaurantModal from "./FavRestaurantModal";
import ToggleModalButton from "./ToggleModalButton";
import DeleteFavouriteButton from "./DeleteFavouriteButton";

import { deleteRestaurant, getFavoriteRestaurant } from "../redux/actions";

import "../css/FavComponent.css";

export default function FavoriteRestaurantComponent({ restaurant }) {
    const [showModal, setShowModal] = useState(false);

    const closeShowModal = () => {
        setShowModal(false);
    };

    const renderPhone = (phone) => {
        if (!phone) {
            return (
                <>
                    <h4>Phone:</h4>
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

    const renderImage = (image) => {
        if (!image) {
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
        <>
            <div className="main-display">
                <div className="single-recipe-container">
                    <h2 className="fav-main-label">{restaurant.name}</h2>
                    <div className="image-container">
                        <a href={restaurant.url} target="_blank">
                            {renderImage(restaurant.image)}
                        </a>
                    </div>

                    <div className="recipe-information">
                        {renderPhone(restaurant.phone)}
                    </div>
                    <div className="delete-button">
                        <ToggleModalButton setShowModal={setShowModal} />
                    </div>
                    {showModal && (
                        <FavRestaurantModal
                            renderImage={renderImage(restaurant.image)}
                            renderPhone={renderPhone(restaurant.phone)}
                            closeShowModal={closeShowModal}
                            restaurant={restaurant}
                        />
                    )}
                    <div className="delete-button">
                        <DeleteFavouriteButton
                            id={restaurant.id}
                            deleteFavourite={deleteRestaurant}
                            getFavourite={getFavoriteRestaurant}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

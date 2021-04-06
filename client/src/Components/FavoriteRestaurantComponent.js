import { useDispatch, useSelector } from "react-redux";
import { getFavoriteRestaurant } from "../redux/actions";
import { useEffect } from "react";

import IsLoadingComponent from "./IsLoadingComponent";
import DeleteFavoriteRestaurantButton from "./DeleteFavoriteRestaurantButton";

import "../css/FavComponent.css";

export default function FavoriteRestaurantComponent() {
    const dispatch = useDispatch();

    const favoriteRestaurant = useSelector((state) => {
        return state.data;
    });
    console.log("restaurant", favoriteRestaurant);
    useEffect(() => {
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
            <h1 className="search-headline">Your Favorites</h1>
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
                                    <h2 className="fav-main-label">
                                        {restaurant.name}
                                    </h2>
                                    <div className="image-container">
                                        <a
                                            href={restaurant.url}
                                            target="_blank"
                                        >
                                            {renderImage(restaurant.image)}
                                        </a>
                                    </div>

                                    <div className="recipe-information">
                                        {renderPhone(restaurant.phone)}
                                    </div>
                                    <div className="recipe-information">
                                        {renderPrice(restaurant.price)}
                                    </div>
                                    <div className="recipe-information">
                                        {renderRating(restaurant.rating)}
                                    </div>
                                    <div className="delete-button">
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
        </>
    );
}

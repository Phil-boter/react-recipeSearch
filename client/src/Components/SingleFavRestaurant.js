import DeleteFavoriteRestaurantButton from "./DeleteFavoriteRestaurantButton";

import "../css/FavComponent.css";

export default function FavoriteRestaurantComponent({ restaurant }) {
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
    const renderPrice = (price) => {
        if (!price) {
            return (
                <>
                    <h4>Price:</h4>
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
                    <h4>Rating:</h4>
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
                    <div className="restaurant-address">
                        <h4>Address:</h4>
                        <ul>
                            <li>{restaurant.address[0]}</li>
                            <li>{restaurant.address[1]}</li>
                            <li>{restaurant.address[2]}</li>
                        </ul>
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
            </div>
        </>
    );
}

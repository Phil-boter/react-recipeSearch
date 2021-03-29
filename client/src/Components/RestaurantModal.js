// import SaveFavorites from "./saveFavorites";

import "../css/RecipeModal.css";

export default function RestaurantModal({
    restaurant,
    index,
    renderPhone,
    renderPrice,
    renderRating,
    closeShowRecipe,
}) {
    console.log("modal mounted");

    return (
        <div className="recipe-modal-container" key={index}>
            <div className="recipe-modal-content">
                <div className="restaurant">
                    <div
                        className="recipe-close-modal"
                        onClick={closeShowRecipe}
                    >
                        <p>close</p>
                    </div>
                    <div>
                        <a
                            src={restaurant.url}
                            target="_blank"
                            className="recipe-modal-image"
                        >
                            <img
                                className="recipe-modal-image"
                                src={restaurant.image_url}
                                alt="imgae of food"
                            />
                        </a>
                    </div>
                    <h2>{restaurant.name}</h2>
                    <div className="recipe-information">{renderPhone}</div>
                    <div className="restaurant-address">
                        <h4>Address:</h4>
                        <ul>
                            <li>{restaurant.location.address1}</li>
                            <li>{restaurant.location.city}</li>
                            <li>{`${restaurant.location.state} ${restaurant.location.zip_code}`}</li>
                        </ul>
                    </div>
                    <div className="recipe-information">
                        <h4>Category:</h4>
                        <ul>
                            {restaurant.categories.map((category, index) => {
                                return (
                                    <div key={index}>
                                        <li>{category.title}</li>
                                    </div>
                                );
                            })}
                        </ul>
                    </div>
                    <div className="recipe-information">{renderPrice}</div>
                    <div className="recipe-information">
                        <h4>Rating:</h4>
                        {renderRating}
                    </div>
                    <div className="recipe-information">
                        <h4>Reviews:</h4>
                        <a href={restaurant.url} target="_blank">
                            {`${restaurant.review_count} reviews`}
                        </a>
                    </div>
                    <div>
                        {/* <SaveFavorites recipe={this.props.recipe} /> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

// import SaveFavorites from "./saveFavorites";

import "../css/RecipeModal.css";

export default function RestaurantModal({
    restaurant,
    index,
    // closeShowRecipe,
    // renderTime,
    // renderCautions,
    // renderFeeds,
    // renderHealthLabels,
}) {
    console.log("modal mounted");

    return (
        <div className="recipe-modal-container" key={index}>
            {/* <div className="recipe-modal-content">
                <div className="restaurant">
                    <div
                        className="recipe-close-modal"
                        onClick={closeShowRecipe}
                    >
                        <p>close</p>
                    </div>
                    <div>
                        <a
                            href={recipe.url}
                            target="_blank"
                            className="recipe-modal-image"
                        >
                            <img
                                className="recipe-modal-image"
                                src={recipe.image}
                                alt="imgae of food"
                            />
                        </a>
                    </div>
                    <h2>{recipe.label}</h2>
                    <div className="recipe-information">
                        <h4>Ingredients:</h4>
                        <ul>
                            {recipe.ingredients.map((ingredient, list) => (
                                <>
                                    <li key={list}>{ingredient.text}</li>
                                </>
                            ))}
                        </ul>
                    </div>
                    <div className="recipe-information">
                        <h4>Recipe on:</h4>
                        <a href={recipe.url} target="_blank">
                            {recipe.source}
                        </a>
                    </div>
                    <div className="recipe-information">{renderFeeds}</div>
                    <div className="recipe-information">{renderTime}</div>
                    <div className="recipe-information">
                        {renderHealthLabels}
                    </div>
                    <div className="recipe-information">{renderCautions}</div>
                    <div>
                        {/* <SaveFavorites recipe={this.props.recipe} /> */}
            {/* </div>
                </div>
            </div>  */}
        </div>
    );
}

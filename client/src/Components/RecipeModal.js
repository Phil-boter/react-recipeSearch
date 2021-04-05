import { useDispatch, useSelector } from "react-redux";
import SaveRecipeButton from "./SaveRecipeButton";
import { Link } from "react-router-dom";

import "../css/RecipeModal.css";

export default function RecipeModal({
    recipe,
    index,
    closeShowRecipe,
    renderTime,
    renderCautions,
    renderFeeds,
    renderHealthLabels,
    renderImage,
}) {
    const user = useSelector((state) => {
        console.log("state in RecipeModal", state);
        return state.user;
    });

    console.log("modal mounted and state", user);

    return (
        <div className="recipe-modal-container" key={index}>
            <div className="recipe-modal-content">
                <div className="restaurant">
                    <div
                        className="recipe-close-modal"
                        onClick={closeShowRecipe}
                    >
                        <p>CLOSE</p>
                    </div>
                    <div>
                        <a
                            href={recipe.url}
                            target="_blank"
                            className="recipe-modal-image"
                        >
                            {renderImage}
                        </a>
                    </div>
                    <h2>{recipe.label}</h2>
                    <div className="recipe-information">
                        <h4>Ingredients:</h4>
                        <ul>
                            {recipe.ingredients.map((ingredient, list) => (
                                <div key={list}>
                                    <li>{ingredient.text}</li>
                                </div>
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
                    <div className="save-button-container">
                        <SaveRecipeButton recipe={recipe} index={index} />
                    </div>
                </div>
            </div>
        </div>
    );
}

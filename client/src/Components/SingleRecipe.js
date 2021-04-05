import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import RecipeModal from "../Components/RecipeModal";

import "../css/SingleRecipe.css";

export default function SingleRecipe({ recipe, index }) {
    // console.log("singlerecipe mounted");
    // console.log("recipe, index", recipe, index);

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

    const renderTime = (totalTime) => {
        if (!totalTime || totalTime === "0") {
            return (
                <>
                    <>
                        <h4>Time:</h4>
                        <p>no preparation time provided</p>
                    </>
                </>
            );
        } else {
            return (
                <>
                    <h4>Time:</h4>
                    <p>{`${totalTime} min`}</p>
                </>
            );
        }
    };

    const renderCautions = (cautions) => {
        console.log("cautions", cautions);
        if (!cautions || cautions.length == "0") {
            return;
        } else {
            return (
                <>
                    <h4>Cautions:</h4>
                    <ul>
                        {cautions.map((caution, hint) => (
                            <div key={hint}>
                                <li>{caution}</li>
                            </div>
                        ))}
                    </ul>
                </>
            );
        }
    };

    const renderHealthLabels = (healthLabels) => {
        if (!healthLabels || healthLabels.length == "0") {
            return;
        } else {
            return (
                <>
                    <h4>Healthlabel:</h4>
                    <ul>
                        {healthLabels.map((label, list) => (
                            <div key={list}>
                                <li>{label}</li>
                            </div>
                        ))}
                    </ul>
                </>
            );
        }
    };

    const renderFeeds = (feeds) => {
        if (!feeds) {
            return;
        } else {
            return (
                <>
                    <h4>Feeds:</h4>
                    <p>{`${feeds} persons`}</p>
                </>
            );
        }
    };

    const renderCuisine = (cuisine) => {
        if (!cuisine) {
            return;
        } else {
            return (
                <>
                    <h4>Cuisine:</h4>
                    <p>{cuisine}</p>
                </>
            );
        }
    };

    const renderDish = (dish) => {
        if (!dish) {
            return;
        } else {
            return (
                <>
                    <h4>Dish:</h4>
                    <p>{dish}</p>
                </>
            );
        }
    };

    const renderImage = (image) => {
        if (!image || image == "") {
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
            <div className="image-container" onClick={() => toggleShowRecipe()}>
                {renderImage(recipe.recipe.image)}
            </div>
            <h2>{recipe.recipe.label}</h2>
            <div className="recipe-information">
                {renderDish(recipe.recipe.dishType)}
            </div>
            <div className="recipe-information">
                {renderCuisine(recipe.recipe.cuisineType)}
            </div>
            <div className="recipe-information">
                {renderTime(recipe.recipe.totalTime)}
            </div>
            <div className="recipe-information">
                {renderFeeds(recipe.recipe.yield)}
            </div>

            {showModal && (
                <RecipeModal
                    recipe={recipe.recipe}
                    key={recipe.index}
                    closeShowRecipe={closeShowRecipe}
                    renderTime={renderTime(recipe.recipe.totalTime)}
                    renderCautions={renderCautions(recipe.recipe.cautions)}
                    renderFeeds={renderFeeds(recipe.recipe.yield)}
                    renderHealthLabels={renderHealthLabels(
                        recipe.recipe.healthLabels
                    )}
                    renderCuisine={renderCuisine(recipe.recipe.cuisineType)}
                    renderDish={renderDish(recipe.recipe.dishType)}
                    renderImage={renderImage(recipe.recipe.image)}
                />
            )}
        </div>
    );
}

import { useState } from "react";

import DeleteFavRecipeButton from "./DeleteFavRecipeButton";
import FavRecipeModal from "./FavRecipeModal";
import ToggleModalButton from "./ToggleModalButton";

import "../css/FavComponent.css";

export default function SingleFavRecipe({ item }) {
    const [showModal, setShowModal] = useState(false);

    const closeShowModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <div className="main-display">
                <div className="single-recipe-container">
                    <h2 className="fav-main-label">{item.label}</h2>
                    <div className="image-container">
                        <a href={item.url} target="_blank">
                            <img
                                className="recipe-modal-image fav-image"
                                src={item.image}
                                alt="image with food"
                            />
                        </a>
                    </div>

                    <div className="recipe-information">
                        <h4>Recipe on :</h4>
                        <a href={item.url} target="_blank">
                            {item.source}
                        </a>
                    </div>
                    <div className="delete-button">
                        <ToggleModalButton setShowModal={setShowModal} />
                    </div>
                    {showModal && (
                        <FavRecipeModal
                            closeShowModal={closeShowModal}
                            item={item}
                        />
                    )}
                    <div>
                        <DeleteFavRecipeButton item={item} />
                    </div>
                </div>
            </div>
        </>
    );
}

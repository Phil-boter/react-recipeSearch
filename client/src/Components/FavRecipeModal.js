import { useSelector } from "react-redux";

import AddNote from "./AddNote";
import ShowNote from "./ShowNote";

import {
    deleteSingleRecipeNote,
    sendNoteRecipe,
    getNoteRecipe,
} from "../redux/actions";

import "../css/FavComponent.css";

export default function FavRecipeModal({ item, closeShowModal }) {
    const note = useSelector((state) => {
        return state.recipeNote;
    });

    return (
        <>
            <div className="recipe-modal-container">
                <div className="recipe-modal-content">
                    <div className="restaurant">
                        <div
                            className="recipe-close-modal"
                            onClick={closeShowModal}
                        >
                            <p>CLOSE</p>
                        </div>

                        <h2 className="fav-main-label">{item.label}</h2>
                        <div className="image-container">
                            <a href={item.url} target="_blank" rel="noreferrer">
                                <img
                                    className="recipe-modal-image fav-image"
                                    src={item.image}
                                    alt="image with food"
                                />
                            </a>
                        </div>

                        <div className="recipe-information">
                            <h4>Recipe on :</h4>
                            <a href={item.url} target="_blank" rel="noreferrer">
                                {item.source}
                            </a>
                        </div>
                        <div className="recipe-information">
                            <h4>Feeds :</h4>
                            {`${item.yield} persons`}
                        </div>
                        <div>
                            <h4>Shopping list :</h4>
                            <ul>
                                {item.ingredient.map((list, bucket) => {
                                    return (
                                        <div key={bucket}>
                                            <li>{list}</li>
                                        </div>
                                    );
                                })}
                            </ul>
                        </div>
                        <div>
                            <h4>Healthlabels :</h4>
                            <ul>
                                {item.healthlabels.map((label, list) => {
                                    return (
                                        <div key={list}>
                                            <li>{label}</li>
                                        </div>
                                    );
                                })}
                            </ul>
                            <div className="notes-container">
                                <ShowNote
                                    item={item}
                                    note={note}
                                    getNote={getNoteRecipe}
                                    deleteNote={deleteSingleRecipeNote}
                                />
                                <AddNote
                                    item={item}
                                    sendNote={sendNoteRecipe}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

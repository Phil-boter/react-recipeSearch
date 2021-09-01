import { useSelector } from "react-redux";

import AddNote from "./AddNote";
import ShowNote from "./ShowNote";

import {
    deleteSingleRestaurantNote,
    sendNoteRestaurant,
    getNoteRestaurant,
} from "../redux/actions";

import "../css/FavComponent.css";

export default function FavRestaurantModal({
    restaurant,
    renderImage,
    renderPhone,
    closeShowModal,
}) {
    const item = restaurant;

    const note = useSelector((state) => {
        return state.restaurantNote;
    });

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

                        <h2 className="fav-main-label">{item.name}</h2>
                        <div className="image-container">
                            <a href={item.url} target="_blank" rel="noreferrer">
                                {renderImage}
                            </a>
                        </div>
                        <div className="recipe-information">{renderPhone}</div>
                        <div className="restaurant-address">
                            <h4>Address:</h4>
                            <ul>
                                <li>{item.address[0]}</li>
                                <li>{item.address[1]}</li>
                                <li>{item.address[2]}</li>
                            </ul>
                        </div>
                        <div className="recipe-information">
                            {renderPrice(item.price)}
                        </div>
                        <div className="recipe-information">
                            {renderRating(item.rating)}
                        </div>
                        <div className="notes-container">
                            <ShowNote
                                item={item}
                                note={note}
                                getNote={getNoteRestaurant}
                                deleteNote={deleteSingleRestaurantNote}
                            />
                            <AddNote
                                item={item}
                                sendNote={sendNoteRestaurant}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

import { useEffect, useState, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteRestaurant, getFavoriteRestaurant } from "../redux/actions";

export default function DeleteFavoriteRestaurantButtom({ restaurant }) {
    const dispatch = useDispatch();
    console.log("restaurant in delete", restaurant);
    const { id } = restaurant;

    const [text, setButtonText] = useState("");

    const Delete = () => {
        console.log("click in deleteRecipe");
        dispatch(deleteRestaurant(id));
        setButtonText("Deleted");
        setTimeout(() => dispatch(getFavoriteRestaurant()), 700);
    };

    useEffect(() => {
        setButtonText("Delete");
    }, [id]);

    return (
        <>
            <div className="delete-button">
                <button
                    className="main-info-button main-info-button-recipe delete"
                    onClick={() => Delete()}
                >
                    {text}
                </button>
            </div>
        </>
    );
}

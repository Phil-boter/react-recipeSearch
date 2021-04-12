import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteRestaurant, getFavoriteRestaurant } from "../redux/actions";

export default function DeleteFavoriteRestaurantButtom({ restaurant }) {
    const dispatch = useDispatch();
    const { id } = restaurant;

    const [text, setButtonText] = useState("");

    const Delete = (e) => {
        console.log("click in delete");
        e.preventDefault();
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
                    onClick={(e) => Delete(e)}
                >
                    {text}
                </button>
            </div>
        </>
    );
}

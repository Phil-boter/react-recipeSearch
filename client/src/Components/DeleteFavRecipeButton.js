import { useEffect, useState, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteRecipe, getFavoriteRecipe } from "../redux/actions";

export default function DeleteFavRecipeButton({ item }) {
    const dispatch = useDispatch();

    const { id } = item;

    const [text, setButtonText] = useState("Delete");

    const Delete = () => {
        console.log("click in deleteRecipe");
        dispatch(deleteRecipe(id));
        setButtonText("Deleted");
        setTimeout(() => dispatch(getFavoriteRecipe()), 700);
    };

    useEffect(() => {
        setButtonText("Delete");
    }, [id]);

    return (
        <div className="delete-button">
            <button
                className="main-info-button main-info-button-recipe delete"
                onClick={() => Delete()}
            >
                {text}
            </button>
        </div>
    );
}

import { useEffect, useState, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteRecipe, getFavoriteRecipe } from "../redux/actions";

export default function DeleteFavRecipeButtom({ item }) {
    const dispatch = useDispatch();

    const { id } = item;

    const [deleted, setDeleted] = useState(false);

    const Delete = () => {
        console.log("click in deleteRecipe");
        setDeleted(true);
        dispatch(deleteRecipe(id));
        dispatch(getFavoriteRecipe());
    };

    useLayoutEffect(() => {
        console.log("useEffect delete");
        dispatch(getFavoriteRecipe());
    }, [deleted]);

    return (
        <>
            <div className="button-fav back delete">
                <button onClick={() => Delete()}>delete</button>
            </div>
        </>
    );
}

import { useEffect, useState, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteRestaurant, getFavoriteRestaurant } from "../redux/actions";

export default function DeleteFavoriteRestaurantButtom({ restaurant }) {
    const dispatch = useDispatch();
    console.log("restaurant in delete", restaurant);
    const { id } = restaurant;

    const [deletedRest, setDeletedRest] = useState(false);

    const Delete = () => {
        console.log("click in deleteRecipe");
        setDeletedRest(true);
        dispatch(deleteRestaurant(id));
        dispatch(getFavoriteRestaurant());
    };

    useLayoutEffect(() => {
        console.log("useEffect delete");
        dispatch(getFavoriteRestaurant());
    }, [deletedRest]);

    return (
        <>
            <div className="button-fav back delete">
                <button onClick={() => Delete()}>delete</button>
            </div>
        </>
    );
}

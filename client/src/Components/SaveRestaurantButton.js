import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { saveRestaurant } from "../redux/actions";

export default function SaveRestaurantButton({ restaurant }) {
    const dispatch = useDispatch();

    const [text, setButtonText] = useState("");

    const SaveRestaurant = () => {
        console.log("click in save restaurant");
        dispatch(saveRestaurant(restaurant));
        setButtonText("Saved");
    };

    useEffect(() => {
        setButtonText("Save to favorites");
    }, []);

    return (
        <>
            <button
                className="main-info-button main-info-button-recipe"
                onClick={() => SaveRestaurant()}
            >
                {text}
            </button>
        </>
    );
}

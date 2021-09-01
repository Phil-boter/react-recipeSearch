import { useDispatch } from "react-redux";

export default function DeleteFavouriteButton({
    id,
    deleteFavourite,
    getFavourite,
}) {
    const dispatch = useDispatch();

    const Delete = async (e) => {
        e.preventDefault();
        await dispatch(deleteFavourite(id));
        await dispatch(getFavourite());
    };

    return (
        <>
            <div className="delete-button">
                <button
                    className="main-info-button main-info-button-recipe delete"
                    onClick={(e) => Delete(e)}
                >
                    Delete
                </button>
            </div>
        </>
    );
}

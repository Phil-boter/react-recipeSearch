import { useDispatch } from "react-redux";

export default function DeleteFavouriteButton({
    id,
    deleteFavourite,
    getFavourite,
}) {
    const dispatch = useDispatch();

    const Delete = async () => {
        try {
            await dispatch(deleteFavourite(id));
            await dispatch(getFavourite());
        } catch (error) {
            throw error;
        }
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

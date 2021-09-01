import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function DeleteSingleNote({
    item,
    getNote,
    deleted,
    deleteSingleNote,
    singleNote,
}) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getNote(item.id));
    }, [deleted]);

    return (
        <>
            <button
                className="delete-note-button"
                onClick={() => deleteSingleNote(singleNote.id)}
            >
                <div className="delete-note-button-content"></div>
            </button>
        </>
    );
}

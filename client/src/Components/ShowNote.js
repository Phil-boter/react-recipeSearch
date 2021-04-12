import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import DeleteSingleNote from "./DeleteSingleNote";

export default function ShowNote({ item, note, getNote, deleteNote }) {
    const dispatch = useDispatch();

    const [deleted, setDeleted] = useState(false);

    const deleteSingleNote = (id) => {
        console.log("click in delete");
        dispatch(deleteNote(id));
        setDeleted(true);
    };

    useEffect(() => {
        dispatch(getNote(item.id));
    }, []);

    return (
        <>
            <h2>Notes:</h2>

            {note &&
                note.map((singleNote, index) => (
                    <div key={index} className="note-list">
                        <p>{singleNote.note}</p>
                        <DeleteSingleNote
                            deleteSingleNote={deleteSingleNote}
                            getNote={getNote}
                            singleNote={singleNote}
                            item={item}
                            deleted={deleted}
                        />
                    </div>
                ))}
        </>
    );
}

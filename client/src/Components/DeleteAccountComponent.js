import { Link, useHistory, useLocation } from "react-router-dom";
import { useEffect, useState, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "./axios";

import { deleteAccount } from "../redux/actions";

export default function DeleteAccountComponent() {
    const dispatch = useDispatch();
    const history = useHistory();

    const account = useSelector((state) => {
        return state.successDeleteAccount;
    });

    const [text, setButtonText] = useState("");

    const logout = () => {
        axios.get("/logout").then(() => history.push("/"));
    };

    const Delete = () => {
        console.log("click in deleteAccount");
        dispatch(deleteAccount());
        setButtonText("Deleted");
        logout();
    };
    useEffect(() => {
        setButtonText("Delete");
    }, []);

    return (
        <>
            <div className="back-to-main-page account">
                <h2>Are you sure you want to delete your account?</h2>
            </div>
            <div className="delete-button">
                <a href="/" onClick={() => Delete()}>
                    <button className="main-info-button main-info-button-recipe delete">
                        DELETE
                    </button>
                </a>
            </div>
        </>
    );
}

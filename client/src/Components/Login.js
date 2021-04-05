import { Component } from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useLocation } from "react-router-dom";

import BackToMainPage from "./BackToMainPage";
import { login } from "../redux/actions";
import Registration from "./Registration";
import NavigationComponent from "./NavigationComponent";

import "../css/Login.css";
import TopLinks from "./TopLinks";

export default function Login() {
    const dispatch = useDispatch();
    const history = useHistory();

    const user = useSelector((state) => {
        console.log("state in login", state);
        return state.user;
    });

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [text, setButtontext] = useState("Login");

    useEffect(() => {
        console.log("useEffect loginComponent");
        if (user && user.id) {
            history.goBack();
        } else if (user && user.success == false) {
            setButtontext("make account first");
        } else {
            return;
        }
    }, [user]);

    const handleEmail = (e) => {
        // console.log("event object name", e.target.name);
        // console.log("event object value", e.target.value);
        setEmail(e.target.value);
    };

    const handlePassword = (e) => {
        // console.log("event object name", e.target.name);
        // console.log("event object value", e.target.value);
        setPassword(e.target.value);
    };

    return (
        <>
            <NavigationComponent />
            <TopLinks />
            <div>
                <BackToMainPage />
            </div>
            <div className="restaurant-container">
                <div className="log-header">
                    <h2>I AM ALREADY A CUSTOMER</h2>
                </div>

                <div className="restaurant-input-container">
                    <input
                        className="recipedata-input"
                        type="text"
                        name="email"
                        placeholder="Email"
                        onChange={(e) => handleEmail(e)}
                    ></input>
                </div>
                <div className="restaurant-input-container">
                    <input
                        className="recipedata-input"
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={(e) => handlePassword(e)}
                    ></input>
                </div>
                <div>
                    <button
                        disabled={(email.length < 1, password.length < 1)}
                        className="main-info-button main-info-button-recipe login-button"
                        onClick={() => dispatch(login(email, password))}
                    >
                        {text}
                    </button>
                </div>

                <Registration />
            </div>
        </>
    );
}

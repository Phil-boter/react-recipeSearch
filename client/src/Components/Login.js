import { Component } from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useLocation } from "react-router-dom";

import BackToMainPage from "./BackToMainPage";
import { login } from "../redux/actions";
import Registration from "./Registration";

export default function Login() {
    const dispatch = useDispatch();
    const history = useHistory();

    const user = useSelector((state) => {
        console.log("state in login", state);
        return state.user;
    });

    console.log("user", user);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        console.log("useEffect loginComponent");
        if (!user) {
            return;
        } else {
            history.replace("/");
        }
    }, [user]);

    const handleEmail = (e) => {
        console.log("event object name", e.target.name);
        console.log("event object value", e.target.value);
        setEmail(e.target.value);
    };

    const handlePassword = (e) => {
        console.log("event object name", e.target.name);
        console.log("event object value", e.target.value);
        setPassword(e.target.value);
    };

    return (
        <>
            <div>
                <BackToMainPage />
            </div>
            <div className="SearchBar">
                <div className="landing-header">
                    <h2>I AM ALREADY A CUSTOMER</h2>
                </div>

                {/* {error && (
                    <h3 className="error">Ooops!! Something went wrong...</h3>
                )} */}
                <div className="SearchBar-fields">
                    <input
                        className="field-left"
                        type="text"
                        name="email"
                        placeholder="Email"
                        onChange={(e) => handleEmail(e)}
                    ></input>
                    <input
                        className="field-right"
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={(e) => handlePassword(e)}
                    ></input>
                </div>
                <div className="SearchBar-submit">
                    <button
                        disabled={email.length < 1}
                        disabled={password.length < 1}
                        className="login-button"
                        onClick={() => dispatch(login(email, password))}
                    >
                        Login
                    </button>
                </div>
                <Registration />
            </div>
        </>
    );
}

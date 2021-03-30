import { Component } from "react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { registration } from "../redux/actions";

export default function Registration() {
    const dispatch = useDispatch();

    const [firstName, setFirst] = useState("");
    const [lastName, setLast] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const handleFirst = (e) => {
        console.log("event object name", e.target.name);
        console.log("event object value", e.target.value);
        setFirst(e.target.value);
    };
    const handleLast = (e) => {
        console.log("event object name", e.target.name);
        console.log("event object value", e.target.value);
        setLast(e.target.value);
    };

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
            <div className="nav-landing-container">
                {/* {error && (
                        <h3 className="error">
                            Ooops!! Something went wrong...
                        </h3>
                    )} */}
                <div>
                    <div className="reg">
                        <input
                            className="field-left"
                            type="text"
                            name="first"
                            placeholder="First name"
                            onChange={(e) => handleFirst(e)}
                        ></input>

                        <input
                            className="field-right"
                            type="text"
                            name="last"
                            placeholder="Last name"
                            onChange={(e) => handleLast(e)}
                        ></input>
                    </div>
                    <div className="reg">
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
                </div>
                <div className="SearchBar-submit landing">
                    <button
                        disabled={
                            (firstName.length < 1,
                            lastName.length < 1,
                            email.length < 1,
                            password.length < 1)
                        }
                        className="reg-button"
                        onClick={() =>
                            dispatch(
                                registration(
                                    firstName,
                                    lastName,
                                    email,
                                    password
                                )
                            )
                        }
                    >
                        Register
                    </button>
                </div>
            </div>
        </>
    );
}

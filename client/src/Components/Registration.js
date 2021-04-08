import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { registration, getUser } from "../redux/actions";

import "../css/Login.css";

export default function Registration({ state }) {
    const dispatch = useDispatch();
    const history = useHistory();

    const user = useSelector((state) => {
        return state.data;
    });

    const [firstName, setFirst] = useState("");
    const [lastName, setLast] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [register, setShowregister] = useState(true);

    const handleFirst = (e) => {
        setFirst(e.target.value);
    };
    const handleLast = (e) => {
        setLast(e.target.value);
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    const showRegistration = () => {
        setShowregister(false);
    };

    const Register = () => {
        dispatch(registration(firstName, lastName, email, password));
        setTimeout(() => {
            dispatch(getUser());
        }, 800);
        setTimeout(() => {
            history.push("/");
        }, 1000);
    };

    return (
        <>
            <div className="restaurant-container login-container">
                <div className="log-header">
                    <h2>I AM A NEW CUSTOMER</h2>
                </div>
                {register ? (
                    <>
                        <button
                            onClick={() => showRegistration()}
                            className="main-info-button main-info-button-recipe login-button"
                        >
                            Create a new account
                        </button>
                    </>
                ) : (
                    <>
                        <div>
                            <form>
                                <div className="restaurant-input-container">
                                    <input
                                        className="recipedata-input"
                                        type="text"
                                        name="first"
                                        placeholder="First name"
                                        onChange={(e) => handleFirst(e)}
                                    ></input>
                                </div>
                                <div className="restaurant-input-container">
                                    <input
                                        className="recipedata-input"
                                        type="text"
                                        name="last"
                                        placeholder="Last name"
                                        onChange={(e) => handleLast(e)}
                                    ></input>
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
                            </form>
                        </div>

                        <div>
                            <button
                                disabled={
                                    (firstName.length < 1,
                                    lastName.length < 1,
                                    email.length < 1,
                                    password.length < 1)
                                }
                                className="main-info-button main-info-button-recipe login-button"
                                onClick={() => Register()}
                            >
                                Register
                            </button>
                        </div>
                    </>
                )}
            </div>
        </>
    );
}

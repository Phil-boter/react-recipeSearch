import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { login } from "../redux/actions";

import "../css/Login.css";

export default function Login({ setIsVisble, visible }) {
    const dispatch = useDispatch();
    const history = useHistory();

    const user = useSelector((state) => {
        return state.user;
    });

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [text, setButtontext] = useState("Login");

    useEffect(() => {
        if (user && user.id) {
            history.goBack();
        } else if (user && user.success == false) {
            setButtontext("Please create an account first");
            setTimeout(() => {
                setButtontext("check email/ password");
                setTimeout(() => {
                    setButtontext("Login");
                }, 2000);
            }, 2000);
        } else {
            return;
        }
    }, [user]);

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    return (
        <div className="restaurant-container login-container">
            <div className="log-header">
                <h2>I AM ALREADY A CUSTOMER</h2>
            </div>
            <form>
                <div className="restaurant-input-container">
                    <input
                        className="recipedata-input"
                        type="text"
                        name="email"
                        autoComplete="email"
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
                        autoComplete="current-password"
                        onChange={(e) => handlePassword(e)}
                    ></input>
                </div>
            </form>
            <div>
                <button
                    disabled={(email.length < 1, password.length < 1)}
                    className="main-info-button main-info-button-recipe login-button"
                    onClick={() => dispatch(login(email, password))}
                >
                    {text}
                </button>
            </div>
        </div>
    );
}

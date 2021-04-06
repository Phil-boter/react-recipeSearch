import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

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
                <form>
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

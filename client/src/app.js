import { BrowserRouter, Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

import Main from "./routes/Main";
import DisplayRecipe from "./routes/DisplayRecipe";
import DisplayRestaurant from "./routes/DisplayRestaurant";
import DisplayLogin from "./routes/DisplayLogin";
import DisplayFavoriteRecipe from "./routes/DisplayFavoriteRecipe";
import DisplayFavoriteRestaurant from "./routes/DisplayFavoriteRestaurant";
import DisplayDeleteAccount from "./routes/DisplayDeleteAccount";
import DisplayAbout from "./routes/DisplayAbout";

import "../src/css/app.css";

export default function App() {
    const { user } = useSelector((state) => {
        return state;
    });

    const [auth, setAuthenticated] = useState(false);
    const [visible, setIsVisible] = useState(false);

    function getUserData() {
        try {
            const storageUser = localStorage.getItem("user");
            if (storageUser) {
                setAuthenticated(true);
            }
        } catch (error) {
            console.log("error", error);
        }
    }

    useEffect(() => {
        getUserData();
    }, [auth, user]);

    return (
        <BrowserRouter>
            <Route
                exact
                path="/"
                render={() => (
                    <Main
                        setIsVisible={setIsVisible}
                        visible={visible}
                        auth={auth}
                    />
                )}
            />
            <Route
                path="/displayRecipe"
                render={() => (
                    <DisplayRecipe
                        setIsVisible={setIsVisible}
                        visible={visible}
                        auth={auth}
                    />
                )}
            />
            <Route
                path="/displayRestaurant"
                render={() => (
                    <DisplayRestaurant
                        setIsVisible={setIsVisible}
                        visible={visible}
                        auth={auth}
                    />
                )}
            />
            <Route
                path="/login"
                render={() => (
                    <DisplayLogin
                        setIsVisible={setIsVisible}
                        visible={visible}
                        auth={auth}
                    />
                )}
            />
            <Route
                path="/about"
                render={() => (
                    <DisplayAbout
                        setIsVisible={setIsVisible}
                        visible={visible}
                        auth={auth}
                    />
                )}
            />
            {!auth || auth != true ? (
                <Redirect to="/" />
            ) : (
                <>
                    <Route
                        path="/favoriteRecipe"
                        render={() => (
                            <DisplayFavoriteRecipe
                                setIsVisible={setIsVisible}
                                visible={visible}
                                auth={auth}
                            />
                        )}
                    />
                    <Route
                        path="/favoriteRestaurant"
                        render={() => (
                            <DisplayFavoriteRestaurant
                                setIsVisible={setIsVisible}
                                visible={visible}
                                auth={auth}
                            />
                        )}
                    />
                    <Route
                        path="/deleteAccount"
                        render={() => (
                            <DisplayDeleteAccount
                                setIsVisible={setIsVisible}
                                visible={visible}
                                auth={auth}
                            />
                        )}
                    />
                </>
            )}
        </BrowserRouter>
    );
}

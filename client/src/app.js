import ReactDOM from "react-dom";
import {
    BrowserRouter,
    Redirect,
    Route,
    useHistory,
    useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";

import Main from "./routes/Main";
import DisplayRecipe from "./routes/DisplayRecipe";
import DisplayRestaurant from "./routes/DisplayRestaurant";

import "../src/css/app.css";
import GetRecipeData from "./Components/GetRecipeData";
import GetRestaurantData from "./Components/GetRestaurantData";
import Login from "./Components/Login";
import DisplayFavoriteRecipe from "./routes/DisplayFavoriteRecipe";
import DisplayFavoriteRestaurant from "./routes/DisplayFavoriteRestaurant";
import DisplayDeleteAccount from "./routes/DisplayDeleteAccount";

export default function App() {
    const { user } = useSelector((state) => {
        console.log("user", state);
        return state;
    });
    return (
        <BrowserRouter>
            <Route exact path="/" render={() => <Main />} />
            <Route path="/searchRecipe" render={() => <GetRecipeData />} />
            <Route
                path="/searchRestaurant"
                render={() => <GetRestaurantData />}
            />
            <Route path="/displayRecipe" render={() => <DisplayRecipe />} />
            <Route
                path="/displayRestaurant"
                render={() => <DisplayRestaurant />}
            />
            <Route path="/login" render={() => <Login />} />
            {!user || !user.id ? (
                <Redirect to="/" />
            ) : (
                <>
                    <Route
                        path="/favoriteRecipe"
                        render={() => <DisplayFavoriteRecipe />}
                    />
                    <Route
                        path="/favoriteRestaurant"
                        render={() => <DisplayFavoriteRestaurant />}
                    />
                    <Route
                        path="/deleteAccount"
                        render={() => <DisplayDeleteAccount />}
                    />
                </>
            )}
        </BrowserRouter>
    );
}

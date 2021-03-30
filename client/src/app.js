import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

import Main from "./routes/Main";
import DisplayRecipe from "./routes/DisplayRecipe";
import DisplayRestaurant from "./routes/DisplayRestaurant";

import "../src/css/app.css";
import GetRecipeData from "./Components/GetRecipeData";
import GetRestaurantData from "./Components/GetRestaurantData";
import Login from "./Components/Login";

export default function App() {
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
        </BrowserRouter>
    );
}

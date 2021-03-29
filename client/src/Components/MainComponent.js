import { Link, Route } from "react-router-dom";

import GetRecipeData from "../Components/GetRecipeData";
import GetRestarantData from "../Components/GetRestaurantData";
import TopLinks from "../Components/TopLinks";

import "../css/MainComponent.css";

export default function MainComponent() {
    return (
        <>
            <>
                <div className="main-info-container">
                    <h1 className="c">
                        Find new inspiration for cooking
                        <br /> or being cooked for
                    </h1>
                    <Link to="/displayRecipe">
                        <button className="main-info-button main-info-button-recipe">
                            Get Inspiration!
                            {/* <p className="main-icon"> {">"}</p> */}
                        </button>
                    </Link>
                    <Link to="/displayRecipe">
                        <button className="main-info-button main-info-button-restaurant">
                            Find restaurants
                            {/* <p className="main-icon">{">"}</p> */}
                        </button>
                    </Link>
                </div>
            </>
        </>
    );
}

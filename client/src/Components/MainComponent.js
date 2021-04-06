import { Link } from "react-router-dom";

import "../css/MainComponent.css";

export default function MainComponent() {
    return (
        <>
            <>
                <div className="main-info-container">
                    <h1>
                        Find new inspiration for cooking
                        <br /> or being cooked for
                    </h1>
                    <Link to="/displayRecipe">
                        <button className="main-info-button main-info-button-recipe">
                            Get Inspiration!
                            {/* <p className="main-icon"> {">"}</p> */}
                        </button>
                    </Link>
                    <Link to="/displayRestaurant">
                        <button className="main-info-button main-info-button-restaurant">
                            Find Restaurants
                            {/* <p className="main-icon">{">"}</p> */}
                        </button>
                    </Link>
                </div>
            </>
        </>
    );
}

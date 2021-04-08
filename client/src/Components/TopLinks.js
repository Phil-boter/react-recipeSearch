import { Link } from "react-router-dom";

import "../css/TopLinks.css";

export default function TopLinks() {
    const styleWhite = {
        backgroundColor: "white",
        color: "#252525",
    };
    const styleBlack = {
        backgroundColor: "#252525",
        color: "white",
    };

    if (window.location.pathname == "/displayRecipe") {
        return (
            <div className="topLink-container">
                <Link
                    to="/displayRecipe"
                    style={styleWhite}
                    className="link-button"
                >
                    <h1 className="route-link">Shopping list</h1>
                </Link>
                <Link
                    to="/displayRestaurant"
                    style={styleBlack}
                    className="link-button"
                >
                    <h1 className="route-link">Restaurant</h1>
                </Link>
            </div>
        );
    } else if (window.location.pathname == "/displayRestaurant") {
        return (
            <div className="topLink-container">
                <Link
                    to="/displayRecipe"
                    style={styleBlack}
                    className="link-button"
                >
                    <h1 className="route-link">Shopping list</h1>
                </Link>
                <Link
                    to="/displayRestaurant"
                    style={styleWhite}
                    className="link-button"
                >
                    <h1 className="route-link">Restaurant</h1>
                </Link>
            </div>
        );
    } else {
        return (
            <div className="topLink-container">
                <Link
                    to="/displayRecipe"
                    style={styleBlack}
                    className="link-button"
                >
                    <h1 className="route-link">Shopping list</h1>
                </Link>
                <Link
                    to="/displayRestaurant"
                    style={styleBlack}
                    className="link-button"
                >
                    <h1 className="route-link">Restaurant</h1>
                </Link>
            </div>
        );
    }
}

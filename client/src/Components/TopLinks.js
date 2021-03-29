import { Link } from "react-router-dom";

import "../css/TopLinks.css";

export default function TopLinks() {
    return (
        <div className="link-container">
            <Link to="/displayRecipe">
                <button className="link-button">
                    <h1 className="route-link">Shopping list</h1>
                </button>
            </Link>
            <Link to="/displayRestaurant">
                <button className="link-button">
                    <h1 className="route-link">Restaurant</h1>
                </button>
            </Link>
        </div>
    );
}

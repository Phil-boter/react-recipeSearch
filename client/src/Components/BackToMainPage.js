import { Link } from "react-router-dom";

import "../css/BackToMainPage.css";

export default function BackToMainPage() {
    return (
        <>
            <div className="back-to-main-page margin">
                <Link to="/displayRecipe">Back to Search</Link>
            </div>
        </>
    );
}

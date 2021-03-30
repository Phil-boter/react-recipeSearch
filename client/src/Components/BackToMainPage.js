import { Link, Route } from "react-router-dom";

import "../css/BackToMainPage.css";

export default function BackToMainPage() {
    return (
        <>
            <div className="back-to-main-page">
                <Link to="/">Back to main page</Link>
            </div>
        </>
    );
}

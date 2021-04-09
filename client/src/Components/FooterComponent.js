import { Link } from "react-router-dom";

import "../css/FooterComponent.css";

export default function FooterComponent() {
    return (
        <>
            <div className="footer-container">
                <Link to="/about">About</Link>
            </div>
        </>
    );
}

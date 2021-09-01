import { useEffect, useState } from "react";

import "../css/CookieModalComponent.css";

export default function CookieModalComponent() {
    const [show, setShowCookie] = useState(true);
    const [accepted, setAccepted] = useState(true);

    const hideCookie = () => {
        setAccepted(true);
        window.localStorage.setItem("cookie", accepted);
        setShowCookie(false);
    };

    useEffect(() => {
        const cookie = window.localStorage.getItem("cookie");
        if (cookie === "true") {
            setShowCookie(false);
        } else {
            return;
        }
    }, []);
    return (
        <>
            {show && (
                <div className="cookie-container">
                    <div className="cookie-content">
                        <h1 className="link cookie-link">Please note!</h1>
                        <p className="cookie-section">
                            This website is for development purposes only and so
                            it is possible that all stored data may be lost.
                            Please be aware of this. It uses cookies for user
                            authentication. The shopping list search is powered
                            by <a href="https://www.edamam.com/">edamam.com</a>.
                            <br></br>
                            The restaurant search is powered by{" "}
                            <a href="https://www.edamam.com/">yelp.com</a>.
                            <br></br>
                            Nevertheless, feel free to explore this site.
                        </p>
                        <div className="save-button-container more-info-button">
                            <button
                                className="main-info-button click-for-modal main-info-button-recipe cookie"
                                onClick={() => hideCookie()}
                            >
                                I understand
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

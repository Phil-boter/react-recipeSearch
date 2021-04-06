import { useState, useEffect } from "react";

import "../css/ScrollToTopButton.css";

export default function ScrollToTopButton() {
    const [showScroll, setShowScroll] = useState(false);

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 400) {
            setShowScroll(true);
        } else if (showScroll && window.pageYOffset <= 400) {
            setShowScroll(false);
        }
    };

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
        window.addEventListener("scroll", checkScrollTop);
        return function cleanup() {
            window.removeEventListener("scroll", checkScrollTop);
        };
    });

    return (
        <>
            {showScroll && (
                <div className="scroll-top-button-container">
                    <button className="scroll-top-button" onClick={scrollTop}>
                        TOP
                    </button>
                </div>
            )}
        </>
    );
}

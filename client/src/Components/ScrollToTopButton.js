import { useState, useEffect } from "react";

import "../css/ScrollToTopButton.css";

export default function ScrollToTopButton() {
    const [visible, setVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 400) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    };
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <>
            {visible && (
                <div className="scroll-top-button-container">
                    <button className="scroll-top-button" onClick={scrollToTop}>
                        TOP
                    </button>
                </div>
            )}
        </>
    );
}

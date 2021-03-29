import { Link, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import "../css/NavigationComponent.css";

export default function NavigationComponent() {
    const [visible, setIsVisible] = useState(false);

    const toggleNavbar = () => {
        console.log("click toggle navbar");
        setIsVisible(true);
    };

    const closeNavbar = () => {
        console.log("click close navbar");
        setIsVisible(false);
    };
    console.log("visible", visible);

    return (
        <>
            <div className="navigation">
                {visible === true ? (
                    <div className="navigation-container">
                        <div className="navigation-modal">
                            <p
                                className="navigation-close"
                                onClick={() => closeNavbar()}
                            >
                                X
                            </p>
                        </div>
                    </div>
                ) : (
                    <p
                        className="navigation-burger"
                        onClick={() => toggleNavbar()}
                    >
                        {" "}
                        |||
                    </p>
                )}
            </div>
        </>
    );
}

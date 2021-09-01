import { useState } from "react";
import { Link } from "react-router-dom";

import "../css/NavigationComponent.css";

export default function NavigationComponent({ setIsVisible, visible, auth }) {
    const [click, setClick] = useState(false);
    const handleClick = () => {
        // setClick(!click);
        setIsVisible(true);
    };
    const closeMenu = () => {
        // setClick(false);
        setIsVisible(false);
    };
    const style1 = {
        transform: "rotate(45deg) translate(10.5px, 7.5px)",
    };
    const style2 = {
        opacity: 0,
    };
    const style3 = {
        transform: "rotate(-45deg) translate(7.5px, -5px)",
    };

    return (
        <>
            <div className="navigation">
                {visible ? (
                    <>
                        <div
                            onClick={(e) => closeMenu(e)}
                            className="navigation-burger"
                        >
                            <div
                                style={style1}
                                className="change burger bar1"
                            ></div>
                            <div
                                style={style2}
                                className="change burger bar2"
                            ></div>
                            <div
                                style={style3}
                                className="change burger bar3"
                            ></div>
                        </div>
                        <div className="navigation-container">
                            <div className="navigation-modal">
                                <div className="link-container">
                                    {!auth ? (
                                        <>
                                            <Link to="/login">
                                                <div className="navigation-link">
                                                    My Account
                                                </div>
                                            </Link>
                                        </>
                                    ) : (
                                        <>
                                            <Link to="/favoriteRecipe">
                                                <div className="navigation-link">
                                                    My Shopping lists
                                                </div>
                                            </Link>
                                            <Link to="/favoriteRestaurant">
                                                <div className="navigation-link">
                                                    My Restaurants
                                                </div>
                                            </Link>
                                            <Link to="/deleteAccount">
                                                <div className="navigation-link">
                                                    Delete Account
                                                </div>
                                            </Link>
                                            <a
                                                href="/logout"
                                                onClick={() =>
                                                    window.localStorage.clear()
                                                }
                                            >
                                                <div className="navigation-link logout">
                                                    Logout
                                                </div>
                                            </a>
                                        </>
                                    )}
                                    <Link to="/about">
                                        <div className="navigation-link">
                                            About
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <div onClick={handleClick} className="navigation-burger">
                        <div className="burger bar1"></div>
                        <div className="burger bar2"></div>
                        <div className="burger bar3"></div>
                    </div>
                )}
            </div>
        </>
    );
}

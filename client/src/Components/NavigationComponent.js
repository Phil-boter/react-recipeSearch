import { Link } from "react-router-dom";
import { useState } from "react";

import { useSelector } from "react-redux";

import "../css/NavigationComponent.css";

export default function NavigationComponent({ setIsVisible, visible }) {
    const user = useSelector((state) => {
        return state.user;
    });

    // const [crossed, setCrossed] = useState(false);

    // const toggleNavbar = () => {
    //     setIsVisible(true);
    //     // setCrossed(true);
    // };

    // const closeNavbar = () => {
    //     setIsVisible(false);
    //     // setCrossed(false);
    // };

    const style1 = {
        transform: "rotate(45deg) translate(10.5px, 13px)",
    };
    const style2 = {
        opacity: 0,
    };
    const style3 = {
        transform: "rotate(-45deg) translate(2.5px, -5px)",
    };

    return (
        <>
            <div className="navigation">
                {visible ? (
                    <>
                        <div
                            onClick={() => setIsVisible(false)}
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
                                {!user || !user.id ? (
                                    <div className="navigation-link">
                                        <Link to="/login">My Account</Link>
                                    </div>
                                ) : (
                                    <>
                                        <div className="navigation-link">
                                            <Link to="/favoriteRecipe">
                                                My Shopping lists
                                            </Link>
                                        </div>
                                        <div className="navigation-link">
                                            <Link to="/favoriteRestaurant">
                                                My Restaurants
                                            </Link>
                                        </div>{" "}
                                        <div className="navigation-link">
                                            <Link to="/deleteAccount">
                                                Delete Account
                                            </Link>
                                        </div>
                                        <div className="navigation-link logout">
                                            <a href="/logout">Logout</a>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </>
                ) : (
                    <div
                        onClick={() => setIsVisible(true)}
                        className="navigation-burger"
                    >
                        <div className="burger bar1"></div>
                        <div className="burger bar2"></div>
                        <div className="burger bar3"></div>
                    </div>
                )}
            </div>
        </>
    );
}

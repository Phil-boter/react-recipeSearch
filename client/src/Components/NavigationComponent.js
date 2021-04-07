import { Link } from "react-router-dom";
import { useState } from "react";

import { useSelector } from "react-redux";

import "../css/NavigationComponent.css";

export default function NavigationComponent() {
    const user = useSelector((state) => {
        return state.user;
    });
    const [visible, setIsVisible] = useState(false);

    const toggleNavbar = () => {
        console.log("click toggle navbar");
        setIsVisible(true);
    };

    const closeNavbar = () => {
        console.log("click close navbar");
        setIsVisible(false);
    };

    return (
        <>
            <div className="navigation">
                {visible === true ? (
                    <>
                        <p
                            className="navigation-close"
                            onClick={() => closeNavbar()}
                        >
                            X
                        </p>
                        <div className="navigation-container">
                            <div className="navigation-modal">
                                {!user || !user.id ? (
                                    <div className="navigation-link">
                                        <Link to="/login">My Account</Link>
                                    </div>
                                ) : (
                                    <></>
                                )}
                                {user && user.id ? (
                                    <div className="navigation-link">
                                        <Link to="/favoriteRecipe">
                                            My Shopping lists
                                        </Link>
                                    </div>
                                ) : (
                                    <></>
                                )}
                                {user && user.id ? (
                                    <div className="navigation-link">
                                        <Link to="/favoriteRestaurant">
                                            My Restaurants
                                        </Link>
                                    </div>
                                ) : (
                                    <></>
                                )}
                                {user && user.id ? (
                                    <div className="navigation-link logout">
                                        <a href="/logout">Logout</a>
                                    </div>
                                ) : (
                                    <></>
                                )}
                                {user && user.id ? (
                                    <div className="navigation-link">
                                        <Link to="/deleteAccount">
                                            Delete Account
                                        </Link>
                                    </div>
                                ) : (
                                    <></>
                                )}
                            </div>
                        </div>
                    </>
                ) : (
                    <div
                        className="navigation-burger"
                        onClick={() => toggleNavbar()}
                    >
                        <div className="burger"></div>
                        <div className="burger"></div>
                        <div className="burger"></div>
                    </div>
                )}
            </div>
        </>
    );
}

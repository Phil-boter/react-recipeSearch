import { Link } from "react-router-dom";
import { useState } from "react";

import { useSelector } from "react-redux";

import "../css/NavigationComponent.css";

export default function NavigationComponent() {
    const user = useSelector((state) => {
        // console.log("state in login", state);
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
    console.log("visible", visible);
    // console.log("user in navigationComp", user);

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
                                {!user ? (
                                    <div className="navigation-link">
                                        <Link to="/login">My Account</Link>
                                    </div>
                                ) : (
                                    <></>
                                )}
                                {user ? (
                                    <div className="navigation-link">
                                        <Link to="/favoriteRecipe">
                                            My Shopping lists
                                        </Link>
                                    </div>
                                ) : (
                                    <></>
                                )}
                                {user ? (
                                    <div className="navigation-link">
                                        <Link to="/favoriteRestaurant">
                                            My Restaurants
                                        </Link>
                                    </div>
                                ) : (
                                    <></>
                                )}
                                {user ? (
                                    <div className="navigation-link logout">
                                        <a href="/logout">Logout</a>
                                    </div>
                                ) : (
                                    <></>
                                )}
                            </div>
                        </div>
                    </>
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

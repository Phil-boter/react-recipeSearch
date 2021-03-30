import { Link, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUser } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

import "../css/NavigationComponent.css";

export default function NavigationComponent() {
    const user = useSelector((state) => {
        console.log("state in login", state);
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
    console.log("user in navigationComp", user);

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
                            {!user ? (
                                <div className="navigation-link">
                                    <Link to="/login">My Account</Link>
                                </div>
                            ) : (
                                <></>
                            )}
                            {user ? (
                                <div className="navigation-link">
                                    <Link to="/favouriteRecipe">
                                        My Recipes
                                    </Link>
                                </div>
                            ) : (
                                <></>
                            )}
                            {user ? (
                                <div className="navigation-link">
                                    <Link to="/favouriteRestaurant">
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

import CookieModalComponent from "../Components/CookieModalComponent";
import MainComponent from "../Components/MainComponent";
import NavigationComponent from "../Components/NavigationComponent";
import { useState } from "react";

export default function Main({ setIsVisible, visible }) {
    return (
        <>
            <>
                <NavigationComponent
                    setIsVisible={setIsVisible}
                    visible={visible}
                />

                <CookieModalComponent />
                <div
                    className="main-container"
                    onClick={() => setIsVisible(false)}
                >
                    <div className="main-image"></div>

                    <MainComponent />
                </div>
            </>
        </>
    );
}

import { useEffect } from "react";

import TopLinks from "../Components/TopLinks";
import NavigationComponent from "../Components/NavigationComponent";
import ScrollToTopButton from "../Components/ScrollToTopButton";
import AboutComponent from "../Components/AboutComponent";
import BackToMainPage from "../Components/BackToMainPage";

export default function DisplayRecipe({ setIsVisible, visible }) {
    useEffect(() => {
        setIsVisible(false);
    }, []);
    return (
        <>
            <NavigationComponent
                setIsVisible={setIsVisible}
                visible={visible}
            />
            <div onClick={() => setIsVisible(false)}>
                <TopLinks />
                <BackToMainPage />
                <AboutComponent />
                <ScrollToTopButton />
            </div>
        </>
    );
}

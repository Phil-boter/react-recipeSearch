import { useEffect } from "react";

import BackToMainPage from "../Components/BackToMainPage";
import TopLinks from "../Components/TopLinks";
import NavigationComponent from "../Components/NavigationComponent";
import FavoriteRecipeComponent from "../Components/FavoriteRecipeComponent";
import ScrollToTopButton from "../Components/ScrollToTopButton";

export default function DisplayFavoriteRecipe({ setIsVisible, visible }) {
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
                <FavoriteRecipeComponent />
                <ScrollToTopButton />
            </div>
        </>
    );
}

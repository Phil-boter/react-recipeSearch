import { useEffect } from "react";

import TopLinks from "../Components/TopLinks";
import GetRecipeData from "../Components/GetRecipeData";
import RecipeComponent from "../Components/RecipeComponent";
import NavigationComponent from "../Components/NavigationComponent";
import ScrollToTopButton from "../Components/ScrollToTopButton";
// import FooterComponent from "../Components/FooterComponent";

export default function DisplayRecipe({ setIsVisible, visible, auth }) {
    useEffect(() => {
        setIsVisible(false);
    }, []);
    return (
        <>
            <NavigationComponent
                setIsVisible={setIsVisible}
                visible={visible}
                auth={auth}
            />
            <div
                onClick={() => setIsVisible(false)}
                className="routes-container"
            >
                <TopLinks />
                <GetRecipeData />
                <RecipeComponent />
                <ScrollToTopButton />
            </div>
            {/* <FooterComponent auth={auth} /> */}
        </>
    );
}

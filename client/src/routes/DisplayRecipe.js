import { useEffect } from "react";

import TopLinks from "../Components/TopLinks";
import GetRecipeData from "../Components/GetRecipeData";
import RecipeComponent from "../Components/RecipeComponent";
import NavigationComponent from "../Components/NavigationComponent";
import ScrollToTopButton from "../Components/ScrollToTopButton";

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
                <GetRecipeData />
                <RecipeComponent />
                <ScrollToTopButton />
            </div>
        </>
    );
}

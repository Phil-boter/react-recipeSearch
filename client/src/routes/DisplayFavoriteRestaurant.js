import { useEffect } from "react";

import BackToMainPage from "../Components/BackToMainPage";
import TopLinks from "../Components/TopLinks";
import NavigationComponent from "../Components/NavigationComponent";
import FavoriteRestaurantComponent from "../Components/FavoriteRestaurantComponent";
import ScrollToTopButton from "../Components/ScrollToTopButton";

export default function DisplayFavouriteRestaurant({ setIsVisible, visible }) {
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
                <FavoriteRestaurantComponent />
                <ScrollToTopButton />
            </div>
        </>
    );
}

import { useEffect } from "react";

import BackToMainPage from "../Components/BackToMainPage";
import TopLinks from "../Components/TopLinks";
import NavigationComponent from "../Components/NavigationComponent";
import FavoriteRestaurantComponent from "../Components/FavoriteRestaurantComponent";
import ScrollToTopButton from "../Components/ScrollToTopButton";
// import FooterComponent from "../Components/FooterComponent";

export default function DisplayFavouriteRestaurant({
    setIsVisible,
    visible,
    auth,
}) {
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
                <BackToMainPage />
                <FavoriteRestaurantComponent />
                <ScrollToTopButton />
            </div>
            {/* <FooterComponent auth={auth} /> */}
        </>
    );
}

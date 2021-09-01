import { useEffect } from "react";

import TopLinks from "../Components/TopLinks";
import GetRestaurantData from "../Components/GetRestaurantData";
import NavigationComponent from "../Components/NavigationComponent";
import RestaurantComponent from "../Components/RestaurantComponent";
import ScrollToTopButton from "../Components/ScrollToTopButton";
// import FooterComponent from "../Components/FooterComponent";

export default function DisplayRestaurant({ setIsVisible, visible, auth }) {
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
                <GetRestaurantData />
                <RestaurantComponent />
                <ScrollToTopButton />
            </div>
            {/* <FooterComponent auth={auth} /> */}
        </>
    );
}

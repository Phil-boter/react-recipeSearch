import TopLinks from "../Components/TopLinks";
import GetRestaurantData from "../Components/GetRestaurantData";
import NavigationComponent from "../Components/NavigationComponent";
import RestaurantComponent from "../Components/RestaurantComponent";
import ScrollToTopButton from "../Components/ScrollToTopButton";

export default function DisplayRestaurant({ setIsVisible, visible }) {
    console.log("display");
    return (
        <>
            <NavigationComponent
                setIsVisible={setIsVisible}
                visible={visible}
            />
            <div onClick={() => setIsVisible(false)}>
                <TopLinks />
                <GetRestaurantData />
                <RestaurantComponent />
                <ScrollToTopButton />
            </div>
        </>
    );
}

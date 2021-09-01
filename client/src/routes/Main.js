import CookieModalComponent from "../Components/CookieModalComponent";
import MainComponent from "../Components/MainComponent";
import NavigationComponent from "../Components/NavigationComponent";
import FooterComponent from "../Components/FooterComponent";

export default function Main({ setIsVisible, visible, auth }) {
    return (
        <>
            <>
                <NavigationComponent
                    setIsVisible={setIsVisible}
                    visible={visible}
                    auth={auth}
                />

                <CookieModalComponent
                    setIsVisible={setIsVisible}
                    visible={visible}
                />
                <div
                    className="main-container"
                    onClick={() => setIsVisible(false)}
                >
                    <div className="main-image"></div>

                    <MainComponent auth={auth} />
                    <FooterComponent auth={auth} />
                </div>
            </>
        </>
    );
}

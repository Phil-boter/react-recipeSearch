import { useEffect } from "react";

import BackToMainPage from "../Components/BackToMainPage";
import TopLinks from "../Components/TopLinks";
import NavigationComponent from "../Components/NavigationComponent";
import DeleteAccountComponent from "../Components/DeleteAccountComponent";
// import FooterComponent from "../Components/FooterComponent";

export default function DisplayDeleteAccount({ setIsVisible, visible, auth }) {
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
                <DeleteAccountComponent />
            </div>
            {/* <FooterComponent auth={auth} /> */}
        </>
    );
}

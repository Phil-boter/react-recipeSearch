import { useEffect } from "react";

import BackToMainPage from "../Components/BackToMainPage";
import TopLinks from "../Components/TopLinks";
import NavigationComponent from "../Components/NavigationComponent";
import DeleteAccountComponent from "../Components/DeleteAccountComponent";

export default function DisplayDeleteAccount({ setIsVisible, visible }) {
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
                <DeleteAccountComponent />
            </div>
        </>
    );
}

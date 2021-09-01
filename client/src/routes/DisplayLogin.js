import { useEffect } from "react";

import BackToMainPage from "../Components/BackToMainPage";
import Registration from "../Components/Registration";
import NavigationComponent from "../Components/NavigationComponent";
import TopLinks from "../Components/TopLinks";
import Login from "../Components/Login";

import "../css/Login.css";

export default function Displaylogin({ setIsVisible, visible, auth }) {
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
            <div onClick={() => setIsVisible(false)}>
                <TopLinks />
                <BackToMainPage />
                <Login />
                <Registration />
            </div>
        </>
    );
}

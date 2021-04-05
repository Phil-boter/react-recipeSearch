import BackToMainPage from "../Components/BackToMainPage";
import TopLinks from "../Components/TopLinks";
import NavigationComponent from "../Components/NavigationComponent";
import DeleteAccountComponent from "../Components/DeleteAccountComponent";

export default function DisplayDeleteAccount() {
    return (
        <>
            <NavigationComponent />
            <TopLinks />
            <BackToMainPage />
            <DeleteAccountComponent />
        </>
    );
}

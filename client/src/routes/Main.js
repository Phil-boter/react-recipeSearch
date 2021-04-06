import MainComponent from "../Components/MainComponent";
import NavigationComponent from "../Components/NavigationComponent";

export default function Main() {
    return (
        <>
            <>
                <NavigationComponent />
                <div className="main-container">
                    <div className="main-image"></div>

                    <MainComponent />
                </div>
            </>
        </>
    );
}

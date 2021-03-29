import MainComponent from "../Components/MainComponent";
import NavigationComponent from "../Components/NavigationComponent";

import "../css/app.css";

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

import "../css/IsLoadingComponent.css";

export default function IsLoadingComponent() {
    if (window.location.pathname == "/displayRecipe") {
        return (
            <div className="recipe-loading">
                <p>What do you think of poke bowl or maybe green curry?</p>
            </div>
        );
    }
    if (window.location.pathname == "/favoriteRecipe") {
        return (
            <div className="recipe-loading">
                <p>You have no favorites</p>
            </div>
        );
    }
    if (window.location.pathname == "/favoriteRestaurant") {
        return (
            <div className="recipe-loading">
                <p>You have no favorites</p>
            </div>
        );
    } else {
        return (
            <div className="recipe-loading">
                <p>French, Italian or Vietnamese?</p>
            </div>
        );
    }
}

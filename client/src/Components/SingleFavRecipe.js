import DeleteFavRecipeButton from "./DeleteFavRecipeButton";
import "../css/FavComponent.css";

export default function SingleFavRecipe({ item }) {
    return (
        <>
            <div className="main-display">
                <div className="single-recipe-container">
                    <h2 className="fav-main-label">{item.label}</h2>
                    <div className="image-container">
                        <a href={item.url} target="_blank">
                            <img
                                className="recipe-modal-image fav-image"
                                src={item.image}
                                alt="image with food"
                            />
                        </a>
                    </div>

                    <div className="recipe-information">
                        <h4>Recipe on :</h4>
                        <a href={item.url} target="_blank">
                            {item.source}
                        </a>
                    </div>
                    <div className="recipe-information">
                        <h4>Feeds :</h4>
                        {`${item.yield} persons`}
                    </div>
                    <div>
                        <h4>Shopping list :</h4>
                        <ul>
                            {item.ingredient.map((list, bucket) => {
                                return (
                                    <div key={bucket}>
                                        <li>{list}</li>
                                    </div>
                                );
                            })}
                        </ul>
                    </div>
                    <div>
                        <h4>Healthlabels :</h4>
                        <ul>
                            {item.healthlabels.map((label, list) => {
                                return (
                                    <div key={list}>
                                        <li>{label}</li>
                                    </div>
                                );
                            })}
                        </ul>{" "}
                        <div>
                            <DeleteFavRecipeButton item={item} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

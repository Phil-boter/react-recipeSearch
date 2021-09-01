import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFavoriteRecipe } from "../redux/actions";

import IsLoadingComponent from "./IsLoadingComponent";
import SearchFavRecipe from "./SearchFavRecipe";
import SingleFavRecipe from "./SingleFavRecipe";

import "../css/FavComponent.css";

export default function FavoriteRecipeComponent() {
    const dispatch = useDispatch();

    const data = useSelector((state) => {
        return state.data;
    });

    useEffect(() => {
        dispatch(getFavoriteRecipe());
    }, []);

    return (
        <>
            <h1 className="search-headline">Your favourite Shopping Lists</h1>
            <SearchFavRecipe />
            <div className="main-display">
                <div className="single-recipe-container">
                    {data === undefined ||
                    data.favoriteRecipe === undefined ||
                    data.favoriteRecipe.length == 0 ? (
                        <div className="loading-container">
                            <IsLoadingComponent />
                        </div>
                    ) : (
                        data.favoriteRecipe.map((item, index) => (
                            <div key={index}>
                                <SingleFavRecipe item={item} />
                            </div>
                        ))
                    )}
                </div>
            </div>
        </>
    );
}

import axios from "./axios";
import { useState, useEffect } from "react";
import SingleFavRecipe from "./SingleFavRecipe";
import SearchInput from "./SearchInput";
import Found from "./NothingFound";

export default function SearchFavRecipe() {
    const [searchResult, setSearchResult] = useState([]);
    const [input, setInput] = useState("");
    const [error, setError] = useState();

    useEffect(() => {
        if (input) {
            let abort = false;
            axios
                .get(`/searchForrecipe/` + input)
                .then(({ data }) => {
                    if (!abort) {
                        setSearchResult(data.searchResult);
                    } else {
                        return () => {
                            abort = true;
                        };
                    }
                })
                .catch((error) => {
                    setError(error);
                });
        }
    }, [input]);

    return (
        <>
            <div>
                {error && <h1>Sorry! Something went wrong...</h1>}

                <SearchInput
                    placeholder={"find special shopping list"}
                    setInput={setInput}
                />

                {!input.length && input && <Found />}

                {input &&
                    searchResult.map((item, index) => (
                        <div key={index}>
                            <SingleFavRecipe item={item} />
                        </div>
                    ))}
                {!searchResult.length && input && <Found />}
            </div>
        </>
    );
}

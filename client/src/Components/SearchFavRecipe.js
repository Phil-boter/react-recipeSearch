import React from "react";
import axios from "./axios";
import { useState, useEffect } from "react";
import SingleFavRecipe from "./SingleFavRecipe";
import SearchInput from "./SearchInput";

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
                        console.log("data find searched user:", data);
                        setSearchResult(data.searchResult);
                        console.log("searchResult:", data.searchResult);
                    } else {
                        return () => {
                            console.log(
                                `About to replace ${input} with a new value`
                            );
                            abort = true;
                        };
                    }
                })
                .catch((error) => {
                    console.log("error in get/searchForRecipe", error);
                    setError(error);
                });
        }
    }, [input]);

    return (
        <>
            {error && <h1>Sorry! Something went wrong...</h1>}

            <SearchInput
                placeholder={"find special shopping list"}
                setInput={setInput}
            />

            {!input.length && input && <li>Nothing Found</li>}

            {input &&
                searchResult.map((item, index) => (
                    <div key={index}>
                        <SingleFavRecipe item={item} />
                    </div>
                ))}
            {!searchResult.length && input && <h3>Nothing Found</h3>}
        </>
    );
}

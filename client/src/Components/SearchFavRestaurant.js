import React from "react";
import axios from "./axios";
import { useState, useEffect } from "react";
import SingleFavRestaurant from "./SingleFavRestaurant";
import SearchInput from "./SearchInput";

export default function SearchFavRestaurant() {
    const [searchRestaurant, setSearchRestaurant] = useState([]);
    const [input, setInput] = useState("");
    const [error, setError] = useState();

    useEffect(() => {
        if (input) {
            let abort = false;
            axios
                .get(`/searchForRestaurant/` + input)
                .then(({ data }) => {
                    if (!abort) {
                        console.log("data find searched restaurant:", data);
                        setSearchRestaurant(data.searchRestaurant);
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
                    console.log("error in get/searchForRestaurant", error);
                    setError(error);
                });
        }
    }, [input]);

    return (
        <>
            {error && <h1>Sorry! Something went wrong...</h1>}

            <SearchInput
                placeholder={"find special restaurant"}
                setInput={setInput}
            />

            {!input.length && input && <li>Nothing Found</li>}

            {input &&
                searchRestaurant.map((restaurant, index) => (
                    <div key={index}>
                        <SingleFavRestaurant restaurant={restaurant} />
                    </div>
                ))}
            {!searchRestaurant.length && input && <h3>Nothing Found</h3>}
        </>
    );
}

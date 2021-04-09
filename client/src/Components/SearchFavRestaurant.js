import React from "react";
import axios from "./axios";
import { useState, useEffect } from "react";
import SingleFavRestaurant from "./SingleFavRestaurant";
import SearchInput from "./SearchInput";
import Found from "./NothingFound";

export default function SearchFavRestaurant() {
    const [searchRestaurant, setSearchRestaurant] = useState([]);
    const [input, setInput] = useState("");
    const [error, setError] = useState();

    const style = {
        textAlign: "center",
    };

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

            {!input.length && input && <Found />}

            {input &&
                searchRestaurant.map((restaurant, index) => (
                    <div key={index}>
                        <SingleFavRestaurant restaurant={restaurant} />
                    </div>
                ))}
            {!searchRestaurant.length && input && <Found />}
        </>
    );
}

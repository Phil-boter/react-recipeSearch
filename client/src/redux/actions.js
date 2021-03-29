import axios from "../Components/axios";

export async function getRecipe(params) {
    console.log("actions getrecipe", params);

    const { data } = await axios.get(`/api/getRecipe/${params}`);
    console.log("data recipe", data);
    if (data.success) {
        return {
            type: "GET_RECIPEDATA",
            recipes: data.recipes,
        };
    }
}

export async function getRestaurant(term, location) {
    console.log("actions getRestaurant", term, location);

    const { data } = await axios.get("/api/getRestaurant/", {
        params: {
            term: term,
            location: location,
            sortBy: "best_match",
        },
    });
    console.log("data recipe", data);
    if (data.success) {
        return {
            type: "GET_RESTAURANTDATA",
            restaurants: data.businesses,
        };
    }
}

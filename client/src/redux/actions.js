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

export async function login(email, password) {
    console.log("actions in login", email, password);

    const { data } = await axios.post("/login", {
        email: email,
        password: password,
    });
    console.log("data in actions login", data);
    if (data.success) {
        return {
            type: "GET_LOGIN",
            user: data,
        };
    }
}

export async function registration(first, last, email, password) {
    const { data } = await axios.post("/registration", {
        first: first,
        last: last,
        email: email,
        password: password,
    });
    console.log("data in actions register", data);
    if (data.success) {
        return {
            type: "GET_REGISTRATION",
            user: data,
        };
    }
}

export async function getUser() {
    const { data } = await axios.get("/user");
    console.log("data in getUser", data);
    if (data.success) {
        return {
            type: "GET_USER",
            user: data,
        };
    }
}

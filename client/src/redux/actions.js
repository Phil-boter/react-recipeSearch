import axios from "../Components/axios";

export async function getRecipe(params) {
    // console.log("actions getrecipe", params);
    try {
        const { data } = await axios.get(`/api/getRecipe/${params}`);
        // console.log("data recipe", data);
        if (data.success) {
            return {
                type: "GET_RECIPEDATA",
                recipes: data.recipes,
            };
        }
    } catch (err) {
        console.log("error in getRecipe", err);
    }
}

export async function getRestaurant(term, location) {
    // console.log("actions getRestaurant", term, location);
    try {
        const { data } = await axios.get("/api/getRestaurant/", {
            params: {
                term: term,
                location: location,
                sortBy: "best_match",
            },
        });
        // console.log("data recipe", data);
        if (data.success) {
            return {
                type: "GET_RESTAURANTDATA",
                restaurants: data.businesses,
            };
        }
    } catch (err) {
        console.log("error in getRestaurant", err);
    }
}

export async function login(email, password) {
    // console.log("actions in login", email, password);
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
    } else if (data.success == false) {
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
            data: data,
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

export async function deleteAccount() {
    const data = await axios.post("/deleteAccount");
    if (data.success) {
        return {
            type: "DELETE_ACCOUNT",
            successDeleteAccount: data.successDeleteAccount,
        };
    }
}

export async function saveRestaurant(saveRest) {
    // console.log("actions in saveRestaurant", saveRest);
    const { data } = await axios.post("/saveRestaurant", saveRest);
    // console.log("data in saveRestaurant", data);
    if (data.success) {
        return {
            type: "SAVE_RESTAURANT",
            success: data.success,
        };
    }
}

export async function getFavoriteRestaurant() {
    // console.log("action in getRecipe");
    const { data } = await axios.get("/getFavoriteRestaurant");
    //console.log("data in getRecipe", data);
    if (data.success) {
        return {
            type: "GET_FAVREST",
            data: data,
        };
    }
}
export async function deleteRestaurant(id) {
    console.log("action in deleteRecipe");

    const { data } = await axios.post("/deleteFavRestaurant", { id: id });
    // console.log("data in deleteRecipe", data);
    return {
        type: "DELETE_RESTAURANT",
        successDeleteRest: data.successDelete,
    };
}

export async function saveRecipe(recipe) {
    // console.log("actions in saveRecipe", recipe);
    const { data } = await axios.post("/saveRecipe", { recipe });
    // console.log("DATA in saverecipe", data);
    if (data.success) {
        return {
            type: "SAVE_RECIPE",
            successSaveRec: data.success,
        };
    }
}

export async function getFavoriteRecipe() {
    // console.log("action in getRecipe");
    const { data } = await axios.get("/getFavoriteRecipe");
    // console.log("data in getRecipe", data);
    if (data.success) {
        return {
            type: "GET_FAVREC",
            data: data,
        };
    }
}
export async function deleteRecipe(id) {
    // console.log("action in deleteRecipe");
    const { data } = await axios.post("/deleteFavRecipe", { id: id });
    // console.log("data in deleteRecipe", data);

    return {
        type: "DELETE_RECIPE",
        successDelete: data.successDelete,
    };
}

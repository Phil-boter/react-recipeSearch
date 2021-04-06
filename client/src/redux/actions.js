import axios from "../Components/axios";

export async function getRecipe(params) {
    try {
        const { data } = await axios.get(`/api/getRecipe/${params}`);
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
    try {
        const { data } = await axios.get("/api/getRestaurant/", {
            params: {
                term: term,
                location: location,
                sortBy: "best_match",
            },
        });
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
    const { data } = await axios.post("/login", {
        email: email,
        password: password,
    });
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
    if (data.success) {
        return {
            type: "GET_REGISTRATION",
            data: data,
        };
    }
}

export async function getUser() {
    const { data } = await axios.get("/user");
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
    const { data } = await axios.post("/saveRestaurant", saveRest);
    if (data.success) {
        return {
            type: "SAVE_RESTAURANT",
            success: data.success,
        };
    }
}

export async function getFavoriteRestaurant() {
    const { data } = await axios.get("/getFavoriteRestaurant");
    if (data.success) {
        return {
            type: "GET_FAVREST",
            data: data,
        };
    }
}
export async function deleteRestaurant(id) {
    const { data } = await axios.post("/deleteFavRestaurant", { id: id });
    return {
        type: "DELETE_RESTAURANT",
        successDeleteRest: data.successDelete,
    };
}

export async function saveRecipe(recipe) {
    const { data } = await axios.post("/saveRecipe", { recipe });
    if (data.success) {
        return {
            type: "SAVE_RECIPE",
            successSaveRec: data.success,
        };
    }
}

export async function getFavoriteRecipe() {
    const { data } = await axios.get("/getFavoriteRecipe");
    if (data.success) {
        return {
            type: "GET_FAVREC",
            data: data,
        };
    }
}
export async function deleteRecipe(id) {
    const { data } = await axios.post("/deleteFavRecipe", { id: id });
    return {
        type: "DELETE_RECIPE",
        successDelete: data.successDelete,
    };
}

import axios from "../Components/axios";
// ---------------------  API ------------------------------
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

// ------------------------  USER ----------------------------------

export async function login(email, password) {
    try {
        const { data } = await axios.post("/login", {
            email: email,
            password: password,
        });
        if (data.success) {
            localStorage.setItem("user", JSON.stringify(data));
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
    } catch (error) {
        console.log("error in logibn", error);
    }
}

export async function registration(first, last, email, password) {
    try {
        const { data } = await axios.post("/registration", {
            first: first,
            last: last,
            email: email,
            password: password,
        });
        if (data.success) {
            localStorage.setItem("user", JSON.stringify(data));
            return {
                type: "GET_REGISTRATION",
                data: data,
            };
        }
    } catch (error) {
        console.log("error in registration", error);
    }
}

export async function getUser() {
    try {
        const { data } = await axios.get("/user");
        if (data.success) {
            return {
                type: "GET_USER",
                user: data,
            };
        }
    } catch (error) {
        console.log("error in get user", error);
    }
}
export async function deleteAccount() {
    try {
        const data = await axios.post("/deleteAccount");
        if (data.success) {
            return {
                type: "DELETE_ACCOUNT",
                successDeleteAccount: data.successDeleteAccount,
            };
        }
    } catch (error) {
        console.log("error in delete Accounts", error);
    }
}
//---------------------   RESTAURANT ----------------------------------

export async function saveRestaurant(saveRest) {
    try {
        const { data } = await axios.post("/saveRestaurant", saveRest);
        if (data.success) {
            return {
                type: "SAVE_RESTAURANT",
                success: data.success,
            };
        }
    } catch (error) {
        console.log("error in save restaurant", error);
    }
}

export async function getFavoriteRestaurant() {
    try {
        const { data } = await axios.get("/getFavoriteRestaurant");
        if (data.success) {
            return {
                type: "GET_FAVREST",
                data: data,
            };
        }
    } catch (error) {
        console.log("error in get fav restaurant", error);
    }
}
export async function deleteRestaurant(id) {
    try {
        const success = await axios.post("/deleteFavRestaurant", { id: id });
        return {
            type: "DELETE_RESTAURANT",
            successDelete: success,
        };
    } catch (error) {
        console.log("error in delete fav restaurant", error);
    }
}

// ------------------------  RECIPE ------------------------------

export async function saveRecipe(recipe) {
    try {
        const { data } = await axios.post("/saveRecipe", { recipe });
        if (data.success) {
            return {
                type: "SAVE_RECIPE",
                saveRecipe: data,
            };
        }
    } catch (error) {
        console.log("error in save fav Recipe", error);
    }
}

export async function getFavoriteRecipe() {
    try {
        const { data } = await axios.get("/getFavoriteRecipe");
        // console.log("data", data);
        if (data.success) {
            return {
                type: "GET_FAVREC",
                favoriteRecipe: data,
            };
        }
    } catch (error) {
        console.log("error in get fav Recipe", error);
    }
}

export async function deleteRecipe(id) {
    try {
        const success = await axios.post("/deleteFavRecipe", {
            id: id,
        });
        // console.log("data indelete ", success);
        if (success) {
            return {
                type: "DELETE_RECIPE",
                successDelete: success,
            };
        } else {
            return { success: false };
        }
    } catch (error) {
        console.log("error in delete Recipe", error);
    }
}

// ----------------------   Notes Recipe ----------------------------

export async function sendNoteRecipe(note, id) {
    try {
        const { data } = await axios.post("/sendNoteRecipe", {
            note: note,
            recipeId: id,
        });
        if (data.success) {
            return {
                type: "SEND_RECIPE_NOTE",
                NewRecipeNote: data.recipeNote,
            };
        }
    } catch (error) {
        console.log("error in sendNoteRecipe", error);
    }
}
export async function getNoteRecipe(id) {
    try {
        const { data } = await axios.get("/getRecipeNote", {
            params: { recipeId: id },
        });
        if (data.success) {
            return {
                type: "GET_RECIPE_NOTE",
                recipeNote: data.recipeNote,
            };
        }
    } catch (error) {
        console.log("error in getNoteRecipe", error);
    }
}

export async function deleteSingleRecipeNote(id) {
    try {
        const { data } = await axios.post("/deleteSingleRecipeNote", {
            recipeNotesId: id,
        });
        if (data.success) {
            return {
                type: "DELETE_RECIPENOTE",
                deleteRecipeNote: data.recipeNote,
            };
        }
    } catch (error) {
        console.log("error ion deleteSingleRecipeNote", error);
    }
}

// -------------- NOTES Restaurant ---------------------

export async function sendNoteRestaurant(note, id) {
    try {
        const { data } = await axios.post("/sendNoteRestaurant", {
            note: note,
            restaurantId: id,
        });
        if (data.success) {
            return {
                type: "SEND_RESTAURANT_NOTE",
                NewRestaurantNote: data.restaurantNote,
            };
        }
    } catch (error) {
        console.log("error in sendNoteRestaurant", error);
    }
}
export async function getNoteRestaurant(id) {
    try {
        const { data } = await axios.get("/getRestaurantNote", {
            params: { restaurantId: id },
        });
        if (data.success) {
            return {
                type: "GET_RESTAURANT_NOTE",
                restaurantNote: data.restaurantNote,
            };
        }
    } catch (error) {
        console.log("error in getNoteRestaurant", error);
    }
}

export async function deleteSingleRestaurantNote(id) {
    try {
        // console.log("id", id);
        const { data } = await axios.post("/deleteSingleRestaurantNote", {
            restaurantNotesId: id,
        });
        if (data.success) {
            return {
                type: "DELETE_RESTAURANTNOTE",
                deleteRestaurantNote: data.restaurantNote,
            };
        }
    } catch (error) {
        console.log("error in  delete NoteRestaurant", error);
    }
}

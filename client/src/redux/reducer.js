export default function (state = {}, action) {
    console.log("reducer running");

    if (action.type == "GET_RECIPEDATA") {
        state = {
            ...state,
            recipes: action.recipes,
        };
    }

    if (action.type == "GET_RESTAURANTDATA") {
        state = {
            ...state,
            restaurants: action.restaurants,
        };
    }

    if (action.type == "GET_USER") {
        state = {
            ...state,
            user: action.user,
        };
    }

    if (action.type == "GET_REGISTRATION") {
        state = {
            ...state,
            data: action.data,
        };
    }

    if (action.type == "GET_LOGIN") {
        state = {
            ...state,
            user: action.user,
        };
    }

    if (action.type == "SAVE_RECIPE") {
        state = {
            ...state,
            successSaveRec: action.successSaveRec,
        };
    }
    if (action.type == "GET_FAVREC") {
        state = {
            ...state,
            data: action.data,
        };
    }
    if (action.type == "DELETE_RECIPE") {
        state = {
            ...state,
            successDelete: action.deleteRecipe,
        };
    }
    if (action.type == "SAVE_RESTAURANT") {
        state = {
            ...state,
            successSaveRec: action.successSaveRec,
        };
    }
    if (action.type == "GET_FAVREST") {
        state = {
            ...state,
            data: action.data,
        };
    }
    if (action.type == "DELETE_RESTAURANT") {
        state = {
            ...state,
            data: action.deleteRestaurant,
        };
    }
    if (action == "DELETE_ACCOUNT") {
        state = {
            ...state,
            successDeleteAccount: action.successDeleteAccount,
        };
    }
    if (action.type == "SEND_RECIPE_NOTE") {
        state = {
            ...state,
            recipeNote: [...state.recipeNote, action.NewRecipeNote],
        };
    }
    if (action.type == "GET_RECIPE_NOTE") {
        state = {
            ...state,
            recipeNote: action.recipeNote,
        };
    }
    if (action.type == "DELETE_RECIPENOTE") {
        state = {
            ...state,
            recipeNote: [...state.recipeNote, action.deleteRecipeNote],
        };
    }
    if (action.type == "SEND_RESTAURANT_NOTE") {
        state = {
            ...state,
            restaurantNote: [...state.restaurantNote, action.NewRestaurantNote],
        };
    }
    if (action.type == "GET_RESTAURANT_NOTE") {
        state = {
            ...state,
            restaurantNote: action.restaurantNote,
        };
    }
    if (action.type == "DELETE_RESTAURANTNOTE") {
        state = {
            ...state,
            restaurantNote: [
                ...state.restaurantNote,
                action.deleteRestaurantNote,
            ],
        };
    }
    return state;
}

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
            successDelete: action.successDelete,
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
            successDeleteRest: action.successDelete,
        };
    }
    if (action == "DELETE_ACCOUNT") {
        state = {
            ...state,
            successDeleteAccount: action.successDeleteAccount,
        };
    }

    return state;
}

export default function (state = {}, action) {
    // console.log("reducer running");

    if (action.type == "GET_RECIPEDATA") {
        // console.log("state in reducer recipe", state);
        state = {
            ...state,
            recipes: action.recipes,
        };
    }

    if (action.type == "GET_RESTAURANTDATA") {
        // console.log("state in reducer restaurant", state);
        state = {
            ...state,
            restaurants: action.restaurants,
        };
    }

    if (action.type == "GET_USER") {
        // console.log("state in reducer USER", state);
        state = {
            ...state,
            user: action.user,
        };
    }

    if (action.type == "GET_REGISTRATION") {
        console.log("state in reducer register", state);
        state = {
            ...state,
            data: action.data,
        };
    }

    if (action.type == "GET_LOGIN") {
        console.log("state reducer login", state);
        state = {
            ...state,
            user: action.user,
        };
    }

    if (action.type == "SAVE_RECIPE") {
        // console.log("state in reducer save recipe", state);
        state = {
            ...state,
            successSaveRec: action.successSaveRec,
        };
    }
    if (action.type == "GET_FAVREC") {
        // console.log("reducer get fav Recipes");
        state = {
            ...state,
            data: action.data,
        };
    }
    if (action.type == "DELETE_RECIPE") {
        // console.log("state in reducer delete recipe", state);
        state = {
            ...state,
            successDelete: action.successDelete,
        };
    }
    if (action.type == "SAVE_RESTAURANT") {
        // console.log("state in reducer save recipe", state);
        state = {
            ...state,
            successSaveRec: action.successSaveRec,
        };
    }
    if (action.type == "GET_FAVREST") {
        // console.log("reducer get fav Restaurant");
        state = {
            ...state,
            data: action.data,
        };
    }
    if (action.type == "DELETE_RESTAURANT") {
        // console.log("state in reducer delete restaurant", state);
        state = {
            ...state,
            successDeleteRest: action.successDelete,
        };
    }
    if (action == "DELETE_ACCOUNT") {
        console.log("state in reducer delete account");
        state = {
            ...state,
            successDeleteAccount: action.successDeleteAccount,
        };
    }

    return state;
}

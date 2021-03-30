export default function (state = {}, action) {
    console.log("reducer running");

    if (action.type == "GET_RECIPEDATA") {
        console.log("state in reducer recipe", state);
        state = {
            ...state,
            recipes: action.recipes,
        };
    }

    if (action.type == "GET_RESTAURANTDATA") {
        console.log("state in reducer restaurant", state);
        state = {
            ...state,
            restaurants: action.restaurants,
        };
    }

    if (action.type == "GET_USER") {
        console.log("state in reducer USER", state);
        state = {
            ...state,
            user: action.user,
        };
    }

    if (action.type == "GET_LOGIN") {
        console.log("state reducer login", state);
        state = {
            ...state,
            user: action.user,
        };
    }
    return state;
}

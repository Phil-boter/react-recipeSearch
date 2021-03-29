export default function (state = {}, action) {
    console.log("reducer running");

    if (action.type == "GET_RECIPEDATA") {
        console.log("state in reducer recipe", state);
        state = {
            ...state,
            recipes: action.recipes,
        };
    }
    return state;
}

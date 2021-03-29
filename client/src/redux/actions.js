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

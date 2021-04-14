const express = require("express");
const router = express.Router();

const { default: axios } = require("axios");

let secrets;
if (process.env.NODE_ENV == "production") {
    secrets = process.env; // in prod the secrets are environment variables
} else {
    secrets = require("../../secrets.json"); // in dev they are in secrets.json which is listed in .gitignore
}

router.get("/api/getRecipe/:input", (req, res) => {
    console.log("GET getRecipe");
    let response;
    async function getRecipes(input) {
        console.log("input", input);
        try {
            response = await axios.get(
                `https://api.edamam.com/search?q=${input}&app_id=${secrets.APP_ID}&app_key=${secrets.APP_KEY}`
            );
            res.json({
                success: true,
                recipes: response.data.hits.map((obj) => ({
                    ...obj,
                    isVisible: false,
                })),
            });
        } catch (error) {
            console.log("error in getRecipe", error);
            res.json({ success: false }).send();
        }
        return response;
    }
    getRecipes(req.params.input);
});

router.get(`/api/getRestaurant/`, (req, res) => {
    console.log("GET getRestaurant");
    const { term, location, sortBy } = req.query;
    const apiKey = secrets.apiKey;
    let response;
    async function search(term, location, sortBy) {
        try {
            response = await axios.get(
                `https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
                {
                    headers: {
                        Authorization: `Bearer ${apiKey}`,
                    },
                }
            );
            res.json({
                success: true,
                businesses: response.data.businesses.map((obj) => ({
                    ...obj,
                    isVisible: false,
                })),
            });
        } catch (error) {
            console.log("error in getRecipe", error);
            res.send({ success: false });
        }
        return response;
    }
    search(term, location, sortBy);
});

module.exports = router;

-- DROP TABLE IF EXISTS recipeNotes;

-- CREATE TABLE recipeNotes(
--     id SERIAL PRIMARY KEY,
--     note VARCHAR(1000) NOT NULL,
--     userId INT REFERENCES users(id) NOT NULL,
--     recipeId INT REFERENCES favRecipe(id) NOT NULL,
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );

const spicedPg = require("spiced-pg");
const db = spicedPg(
    process.env.DATABASE_URL ||
        "postgres:postgres:postgres@localhost:5432/recipeapp"
);
//------------------ users-database-------------------------

module.exports.addUser = (first, last, email, hashed_password) => {
    const q = `INSERT INTO users (first, last, email, password) VALUES ($1, $2, $3, $4) RETURNING id`;
    const params = [first, last, email, hashed_password];
    return db.query(q, params);
};

module.exports.getHashedPassword = (email) => {
    const q = `SELECT * FROM users WHERE email = $1`;
    const params = [email];
    return db.query(q, params);
};

module.exports.getUserByEmail = (email) => {
    const q = `SELECT email FROM users WHERE email = $1`;
    const params = [email];
    return db.query(q, params);
};

module.exports.setSecretCode = (email, code) => {
    const q = `INSERT INTO reset_codes (email, code) VALUES ($1, $2)`;
    const params = [email, code];
    return db.query(q, params);
};

module.exports.getSecretCode = (email) => {
    const q = `SELECT code FROM reset_codes WHERE email = $1 AND CURRENT_TIMESTAMP - timestamp < INTERVAL '10 minutes'`;
    const params = [email];
    return db.query(q, params);
};

module.exports.updateUserPassword = (email, password) => {
    const q = `UPDATE users SET password = $2 WHERE email = $1`;
    const params = [email, password];
    return db.query(q, params);
};

module.exports.getUserData = (id) => {
    const q = `SELECT * FROM users WHERE id = $1`;
    const params = [id];
    return db.query(q, params);
};

module.exports.saveFavoriteRecipe = (
    uri,
    label,
    url,
    source,
    image,
    ingredient,
    yield,
    healthLabels,
    cautions,
    userId
) => {
    const q = `INSERT INTO favRecipe (uri, label, url, source, image, ingredient, yield, healthLabels, cautions, userId) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING * `;
    const params = [
        uri,
        label,
        url,
        source,
        image,
        ingredient,
        yield,
        healthLabels,
        cautions,
        userId,
    ];
    return db.query(q, params);
};
module.exports.getFavoriteRecipe = (userId) => {
    const q = `SELECT * FROM favRecipe WHERE userid = $1`;
    const query = [userId];
    return db.query(q, query);
};

module.exports.deleteRecipe = (id, userId) => {
    const q = `DELETE FROM favRecipe WHERE (id = $1 AND userId = $2)`;
    const query = [id, userId];
    return db.query(q, query);
};

module.exports.deleteAccount = (userId) => {
    const q = `DELETE FROM users WHERE id = $1`;
    const query = [userId];
    return db.query(q, query);
};

module.exports.deleteFavRecipe = (userId) => {
    const q = `DELETE FROM favRecipe WHERE userId = $1`;
    const query = [userId];
    return db.query(q, query);
};
module.exports.deleteFavRestaurant = (userId) => {
    const q = `DELETE FROM favRestaurant WHERE userId = $1`;
    const query = [userId];
    return db.query(q, query);
};

module.exports.saveFavoriteRestaurant = (
    name,
    url,
    image,
    price,
    rating,
    category,
    phone,
    address,
    userId
) => {
    const q = `INSERT INTO favRestaurant (   
        name,
        url,
        image,
        price,
        rating,
        category,
        phone,
        address,
        userId
        ) VALUES ($1, $2, $3, $4, $5, $6, $7,$8,$9) RETURNING * `;
    const params = [
        name,
        url,
        image,
        price,
        rating,
        category,
        phone,
        address,
        userId,
    ];
    return db.query(q, params);
};
module.exports.getFavoriteRestaurant = (userId) => {
    const q = `SELECT * FROM favRestaurant WHERE userid = $1`;
    const query = [userId];
    return db.query(q, query);
};

module.exports.deleteRestaurant = (id, userId) => {
    const q = `DELETE FROM favRestaurant WHERE (id = $1 AND userId = $2) RETURNING *`;
    const query = [id, userId];
    return db.query(q, query);
};

module.exports.searchForRecipe = (userId, input) => {
    const q = `SELECT * FROM favRecipe WHERE (userId = $1 AND label ILIKE $2) LIMIT 10;`;
    const query = [userId, input + "%"];
    return db.query(q, query);
};
module.exports.searchForRestaurant = (userId, input) => {
    const q = `SELECT * FROM favRestaurant WHERE (userId = $1 AND name ILIKE $2) LIMIT 10;`;
    const query = [userId, input + "%"];
    return db.query(q, query);
};

// module.exports.saveNoteRecipe = (note, userId, recipeId) => {
//     const q = `INSERT INTO recipeNotes (note, userId, recipeId) VALUES ($1, $2, $3) RETURNING *`;
//     const params = [note, userId, recipeId];
//     return db.query(q, params);
// };
// module.exports.getRecipeNote = (recipeId) => {
//     const q = "SELECT * FROM recipeNotes WHERE recipeId = $1";
//     const params = [recipeId];
//     return db.query(q, params);
// };

// module.exports.deleteRecipeNote = (userId) => {
//     const q = `DELETE FROM recipeNotes WHERE userId = $1 RETURNING *`;
//     const query = [userId];
//     return db.query(q, query);
// };

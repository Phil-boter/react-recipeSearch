DROP TABLE IF EXISTS restaurantNotes;

CREATE TABLE restaurantNotes(
    id SERIAL PRIMARY KEY,
    note VARCHAR(1000) NOT NULL,
    userId INT REFERENCES users(id) NOT NULL,
    restaurantId INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
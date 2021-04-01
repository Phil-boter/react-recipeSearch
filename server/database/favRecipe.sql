
  DROP TABLE IF EXISTS favRecipe CASCADE;
  
  CREATE TABLE favRecipe(
      id SERIAL PRIMARY KEY,
      uri VARCHAR(500) NOT NULL,
      label VARCHAR(255) NOT NULL,
      url VARCHAR(255) NOT NULL,
      source VARCHAR(255) NOT NULL,
      image VARCHAR(255),
      ingredient TEXT[],
      yield VARCHAR(255),
      healthLabels TEXT[],
      cautions TEXT[],
      userId INT REFERENCES users(id) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );

  DROP TABLE IF EXISTS users;
  
  CREATE TABLE users(
      id SERIAL PRIMARY KEY,
      first VARCHAR(255) NOT NULL,
      last VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL UNIQUE,
      password VARCHAR(255) NOT NULL,
      image VARCHAR(255),
      bio VARCHAR(1000),
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );

  DROP TABLE IF EXISTS favRestaurant CASCADE;
  
  CREATE TABLE favRestaurant(
      id SERIAL PRIMARY KEY,
      name VARCHAR(500) NOT NULL,
      url VARCHAR(500) NOT NULL,
      image VARCHAR(255),
      price VARCHAR(255),
      rating VARCHAR(255),
      category TEXT[],
      phone VARCHAR(255),
      address TEXT[],
      userId INT REFERENCES users(id) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
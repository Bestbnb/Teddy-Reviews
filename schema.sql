CREATE DATABASE IF NOT EXISTS reviews;

USE reviews;

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(75),
  profile_picture VARCHAR(75),
  profile_page VARCHAR(100)
);

CREATE TABLE stars (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  user_ID INT,
  FOREIGN KEY (user_ID) REFERENCES users(id),
  accuracy INT,
  communication INT,
  cleanliness INT,
  location INT,
  check_in INT,
  value INT
);

CREATE TABLE reviews (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  user_ID INT,
  FOREIGN KEY (user_ID) REFERENCES users(id),
  date_pubilished DATE,
  review TEXT,
  stars_ID INT,
  FOREIGN KEY (stars_ID) REFERENCES stars(id)
);



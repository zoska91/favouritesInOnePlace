CREATE DATABASE favourites;

CREATE TABLE favourites.Group ( 
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    firstName VARCHAR(128),
    lastName VARCHAR(128),
    email VARCHAR(128),
    password VARCHAR(128),
    createdAt DATETIME NOT NULL, 
    updatedAt DATETIME NOT NULL 
)

CREATE TABLE favourites.Data ( 
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    groupId VARCHAR(128),
    text VARCHAR(500),
    userId INT,
    link VARCHAR(500),
    createdAt DATETIME NOT NULL, 
    updatedAt DATETIME NOT NULL 
)

CREATE TABLE favourites.Group ( 
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(128),
    createdAt DATETIME NOT NULL, 
    updatedAt DATETIME NOT NULL 
)
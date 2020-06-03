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

CREATE TABLE favourites.Groups ( 
    id INT NOT NULL PRIMARY KEY,
    name VARCHAR(128)
)

select * from favourites.Groups 
INSERT INTO favourites.Groups (id, name) 
values 
(0, 'music'), 
(1, 'movies'),
(2, 'books'),
(3, 'games'),
(4, 'tvseries'),
(5, 'links'),
(6, 'notes')
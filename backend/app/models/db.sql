

CREATE TABLE users (
    userID serial PRIMARY KEY NOT NULL,
    LastName varchar(255),
    FirstName varchar(255),
    email varchar(255),
    password varchar(255)
);
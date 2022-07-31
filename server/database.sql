CREATE DATABASE perstack;

 CREATE TABLE todo(
 	todo_id SERIAL PRIMARY KEY, 
 	description VARCHAR(255),
    addedAt TIMESTAMP;
 );
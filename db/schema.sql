DROP DATABASE IF EXISTS sql_burger;

CREATE DATABASE sql_burger;

USE sql_burger;

CREATE TABLE burgers(
id INT AUTO_INCREMENT NOT NULL,
burger_name VARCHAR(1000) NOT NULL,
devoured BOOLEAN DEFAULT FALSE,
date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY(id)
);

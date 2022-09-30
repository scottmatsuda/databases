CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  id INTEGER(11) NOT NULL AUTO_INCREMENT,
  username VARCHAR(20),
  PRIMARY KEY(id)
);

CREATE TABLE messages (
  id INTEGER(11) NOT NULL AUTO_INCREMENT,
  user_id INTEGER(11) NULL DEFAULT NULL,
  text VARCHAR(100),
  PRIMARY KEY(id),
  FOREIGN KEY(user_id) REFERENCES users (id)
);


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/


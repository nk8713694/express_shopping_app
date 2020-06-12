# preparing the database

logged in as a root 

create database shopdb;
CREATE USER 'newuser'@'localhost' IDENTIFIED BY 'user_password';

grant all privileges on shopperdb.* to 'shopper; @'localhost';
create database trabajofinalintegrador;

use trabajofinalintegrador;

create table categories (id int auto_increment primary key, title varchar(255), description varchar (255), urlimg varchar(255));

create table users (id int auto_increment primary key, name varchar(255), last_name varchar(255), mail varchar(255), password varchar(255));

CREATE TABLE IF NOT EXISTS features (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), icon NVARCHAR(2083));

CREATE TABLE IF NOT EXISTS images (id INT AUTO_INCREMENT PRIMARY KEY, title VARCHAR(255), url NVARCHAR(2083));

CREATE TABLE IF NOT EXISTS products (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), description varchar (255));

CREATE TABLE IF NOT EXISTS cities (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), country VARCHAR(255));

CREATE TABLE IF NOT EXISTS roles (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255));

CREATE TABLE IF NOT EXISTS reservations (id INT AUTO_INCREMENT PRIMARY KEY, final_date DATE, start_date DATE, start_time int);

CREATE TABLE IF NOT EXISTS punctuations (id INT AUTO_INCREMENT PRIMARY KEY, punctuation int);



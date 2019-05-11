create database bamazon;

use bamazon;

create table products(
item_id INT primary key auto_increment,
product_name VARCHAR(30),
price INT,
stock_quantity INT
);

use bamazon;

INSERT INTO products (product_name, price, stock_quantity)
VALUES ('HP_Poster', 5, 30), ('samsung_phone', 500, 700), ('reuseable_mug',  5, 15), ('tshirt_pack', 10, 25), ('laptop', 600, 1200), ('Large_Pack_Nutigrain', 15, 100), ('


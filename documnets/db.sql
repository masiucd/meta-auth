DROP TABLE ingredients;
DROP TABLE products;
DROP TABLE productIngredients;

CREATE TABLE products (
    productId INTEGER PRIMARY KEY AUTOINCREMENT,
    productName TEXT,
    description TEXT,
    category TEXT,
    image TEXT,
    price INTEGER
);

INSERT INTO products (productName, description, category, image, price)
VALUES ('Kanelbullar', 'Perfekt till lördagsfikat','Bulle', 'https://www.kronjast.se/wp-content/uploads/2020/03/Kanelbullar-e1524491189436_800x670_acf_cropped.jpg', 29),('Kladdkaka','Kladdig god kaka','Kaka','https://cdn-rdb.arla.com/Files/arla-se/560738664/b77085e1-3f17-4f78-9409-82bb0b87ce25.jpg?mode=crop&w=479&h=335&ak=f525e733&hm=d7d1b1dd', 49),('Vaniljbulle', 'Bulle med smak av vanilj', 'Bulle','https://konditorikatarina.se/wp-content/uploads/2020/01/img-20191211-144317.jpg', 10);

SELECT * FROM products;


CREATE TABLE ingredients (
    ingredientId INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT
);

INSERT INTO ingredients (name)
VALUES ('Ägg'), ('Mjöl'), ('Socker');

SELECT * FROM ingredients;



CREATE TABLE productIngredients (
    productIngredientId INTEGER PRIMARY KEY AUTOINCREMENT,
    ingredient_Id INTEGER,
    product_Id INTEGER,
    volume INTEGER,
    measure TEXT,
    FOREIGN KEY (product_Id) REFERENCES products (productId),
    FOREIGN KEY (ingredient_Id) REFERENCES ingredients (ingredientId)
);

SELECT * FROM productIngredients;

INSERT INTO productIngredients (product_Id, ingredient_Id, volume, measure)
VALUES (1,1, 2,'st'),(1,2,3,'dl'),(2,2,1,'dl'),(3,3,15,'cl'),(2,1, 3,'st');

SELECT products.name, ingredients.name
FROM ingredients
INNER JOIN productIngredients
ON ingredients.ingredientId = productIngredients.ingredient_Id
INNER JOIN products
ON productIngredients.product_Id = products.productId
WHERE products.name = 'Vaniljbulle';


SELECT ingredients.name, products.name
FROM ingredients
INNER JOIN productIngredients
ON ingredient_Id = productIngredients.product_Id
INNER JOIN products
ON productIngredients.ingredient_Id = ingredients.ingredientId;



SELECT products.productName, products.description, products.category, products.image, products.price, ingredients.name, productIngredients.volume, productIngredients.measure
FROM ingredients
INNER JOIN productIngredients
ON ingredients.ingredientId = productIngredients.ingredient_Id
INNER JOIN products
ON productIngredients.product_Id = products.productId;

SELECT * FROM products;




SELECT products.productName, ingredients.name, productIngredients.volume, productIngredients.measure
FROM ingredients
INNER JOIN productIngredients
ON ingredients.ingredientId = productIngredients.ingredient_Id
INNER JOIN products
ON productIngredients.product_Id = products.productId;


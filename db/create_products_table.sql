CREATE TABLE products(
    id SERIAL PRIMARY KEY,
    name VARCHAR(80) NOT NULL,
    description VARCHAR(80) NOT NULL,
    price NUMERIC(10,2) NOT NULL,
    image_url TEXT(400) NOT NULL
);
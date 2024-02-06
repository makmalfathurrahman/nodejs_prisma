CREATE TABLE sample (
    id VARCHAR(10) NOT NULL,
    name VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE customers (
    id     VARCHAR(100) NOT NULL,
    name   VARCHAR(100) NOT NULL,
    email  VARCHAR(100) NOT NULL,
    phone  VARCHAR(100) NOT NULL,
    PRIMARY KEY (id),
    CONSTRAINT customer_email_unique UNIQUE (email),
    CONSTRAINT customer_phone_unique UNIQUE (phone)
);

CREATE TABLE products (
    id        VARCHAR(100)  NOT NULL,
    name      VARCHAR(100)  NOT NULL,
    price     INT           NOT NULL,
    stock     INT           NOT NULL,
    category  VARCHAR(100)  NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO products(id, name, price, stock, category)
VALUES  ('P0001', 'Product A', 1000, 10, 'X1'),
        ('P0002', 'Product B', 2000, 20, 'X1'),
        ('P0003', 'Product C', 3000, 30, 'X1'),
        ('P0004', 'Product D', 4000, 40, 'X1'),
        ('P0005', 'Product E', 5000, 50, 'X1');

INSERT INTO products(id, name, price, stock, category)
VALUES  ('P0006', 'Product A', 1000, 10, 'X2'),
        ('P0007', 'Product B', 2000, 20, 'X2'),
        ('P0008', 'Product C', 3000, 30, 'X2'),
        ('P0009', 'Product D', 4000, 40, 'X2'),
        ('P0010', 'Product E', 5000, 50, 'X2');


CREATE TABLE categories (
    id   SERIAL         PRIMARY KEY,
    name VARCHAR(100)   NOT NULL
);
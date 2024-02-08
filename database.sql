CREATE TABLE
    sample (
        id VARCHAR(10) NOT NULL,
        name VARCHAR(100) NOT NULL,
        PRIMARY KEY (id)
    );

CREATE TABLE
    customers (
        id VARCHAR(100) NOT NULL,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) NOT NULL,
        phone VARCHAR(100) NOT NULL,
        PRIMARY KEY (id),
        CONSTRAINT customer_email_unique UNIQUE (email),
        CONSTRAINT customer_phone_unique UNIQUE (phone)
    );

INSERT INTO
    customers (id, name, email, phone)
VALUES
    ('0001', 'one', 'one@email.com', '1111'),
    ('0002', 'two', 'two@email.com', '2222'),
    ('0003', 'three', 'three@email.com', '3333'),
    ('0004', 'four', 'four@email.com', '4444'),
    ('0005', 'five', 'five@email.com', '5555'),
    ('0006', 'six', 'six@email.com', '6666'),
    ('0007', 'seven', 'seven@email.com', '7777'),
    ('0008', 'eight', 'eight@email.com', '8888'),
    ('0009', 'nine', 'nine@email.com', '9999'),
    ('0010', 'ten', 'ten@email.com', '1010');

CREATE TABLE
    products (
        id VARCHAR(100) NOT NULL,
        name VARCHAR(100) NOT NULL,
        price INT NOT NULL,
        stock INT NOT NULL,
        category VARCHAR(100) NOT NULL,
        PRIMARY KEY (id)
    );

INSERT INTO
    products (id, name, price, stock, category)
VALUES
    ('P0001', 'Product A', 1000, 10, 'X1'),
    ('P0002', 'Product B', 2000, 20, 'X1'),
    ('P0003', 'Product C', 3000, 30, 'X1'),
    ('P0004', 'Product D', 4000, 40, 'X1'),
    ('P0005', 'Product E', 5000, 50, 'X1');

INSERT INTO
    products (id, name, price, stock, category)
VALUES
    ('P0006', 'Product A', 1000, 10, 'X2'),
    ('P0007', 'Product B', 2000, 20, 'X2'),
    ('P0008', 'Product C', 3000, 30, 'X2'),
    ('P0009', 'Product D', 4000, 40, 'X2'),
    ('P0010', 'Product E', 5000, 50, 'X2');

CREATE TABLE
    categories (id SERIAL PRIMARY KEY, name VARCHAR(100) NOT NULL);

CREATE TABLE
    wallet (
        id VARCHAR(100) NOT NULL PRIMARY KEY,
        balance INT NOT NULL,
        customer_id VARCHAR(100),
        CONSTRAINT wallet_customer_id_fk FOREIGN KEY (customer_id) REFERENCES customers (id),
        CONSTRAINT wallet_customer_id_unique UNIQUE (customer_id)
    );

CREATE TABLE
    comments (
        id SERIAL PRIMARY KEY,
        customer_id VARCHAR(100),
        title VARCHAR(200) NOT NULL,
        description TEXT,
        CONSTRAINT wallet_customer_id_fk FOREIGN KEY (customer_id) REFERENCES customers (id)
    );

INSERT INTO
    comments (customer_id, title, description)
VALUES
    ('0002', 'Comment 1', 'THIS IS COMMENT 1'),
    ('0002', 'Comment 2', 'THIS IS COMMENT 2'),
    ('0004', 'Comment 1', 'THIS IS COMMENT 1'),
    ('0004', 'Comment 2', 'THIS IS COMMENT 2');

CREATE TABLE
    likes (
        customer_id VARCHAR(100) NOT NULL,
        product_id VARCHAR(100) NOT NULL,
        PRIMARY KEY (customer_id, product_id),
        CONSTRAINT likes_customer_id_fk FOREIGN KEY (customer_id) REFERENCES customers (id),
        CONSTRAINT likes_product_id_fk FOREIGN KEY (product_id) REFERENCES products (id)
    );

CREATE TABLE
    _favorites (
        A VARCHAR(100) NOT NULL,
        B VARCHAR(100) NOT NULL,
        PRIMARY KEY (A, B),
        CONSTRAINT customer_favorites_fk FOREIGN KEY (A) REFERENCES customers (id),
        CONSTRAINT product_favorites_fk FOREIGN KEY (B) REFERENCES products (id)
    );
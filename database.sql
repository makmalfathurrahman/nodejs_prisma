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
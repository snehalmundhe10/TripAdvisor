---- Commands -----
-- for help                                               \?
-- list out database                                      \l
-- To create Database                                     CREATE DATABASE <database_name>;
-- To connect to the database                             \c <database_name>
-- To list out all the tables in the database             \d
-- To see the structure of the table                      \d <name_of_tabke>
-- To modify table                                        ALTER TABLE <table_name><command>;
-- To drop table                                          DROP TABLE <table_name>;
-- To drop database                                       DROP DATABASE <database_name>;

CREATE TABLE products (
    id INT,
    name VARCHAR(50),
    price INT,
    on_sale boolean
);
ALTER TABLE products ADD COLUMN featured boolean;
ALTER TABLE products DROP COLUMN featured;


CREATE TABLE restaurants(
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    location VARCHAR(50) NOT NULL,
    price_range INT NOT NULL check(price_range >=1 and price_range <=5)
);

INSERT INTO restaurants(id, name, location, price_range) 
values (123, 'mcdonalds', 'new york', 3);

-- To see all the data in the table
select * from restaurants;
-- * - you want to get every single column
--to see particular column
select name, price_range from restaurants;

INSERT INTO restaurants(name, location, price_range) 
values ('mcdonalds', 'new york', 7);

-- reviews
CREATE TABLE reviews (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    restaurant_id BIGINT NOT NULL REFERENCES restaurants(id) on delete cascade on update cascade,
    name VARCHAR(50) NOT NULL,
    review TEXT NOT NULL,
    rating INT NOT NULL check(rating >=1 and rating <=5)
);

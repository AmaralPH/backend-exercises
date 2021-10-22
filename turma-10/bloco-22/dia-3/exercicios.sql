USE sakila;

					-- EXERCICIO 1 --

DROP VIEW film_with_categories;

CREATE VIEW film_with_categories AS
	SELECT f.title, fc.category_id, c.name
	FROM film AS f
	INNER JOIN film_category AS fc USING(film_id)
	INNER JOIN category AS c USING(category_id)
	ORDER BY f.title;

SELECT * FROM film_with_categories;

					-- EXERCICIO 2 --

CREATE VIEW film_info AS
	SELECT a.actor_id, CONCAT(a.first_name, ' ', a.last_name) AS actor, f.title
	FROM actor AS a
	INNER JOIN film_actor AS fa ON fa.actor_id = a.actor_id
	INNER JOIN film AS f ON f.film_id = fa.film_id
	ORDER BY actor;
    
SELECT * FROM film_info;

					-- EXERCICIO 3 --

SELECT * FROM address;

CREATE VIEW address_info AS
	SELECT a.address_id, a.address, a.district, a.city_id, c.city
	FROM address AS a
	INNER JOIN city AS c USING(city_id)
	ORDER BY c.city;

SELECT * FROM address_info;

				-- EXERCICIO 4 --
SELECT * FROM language;

CREATE VIEW movies_languages AS
	SELECT f.title, l.language_id, l.name
	FROM film AS f
	INNER JOIN language AS l USING(language_id);
    
SELECT * FROM movies_languages;

				-- INDEX questão 1 --
 
 CREATE FULLTEXT INDEX index_category ON category(name);
 
 SELECT * FROM category WHERE MATCH(name) AGAINST('action'); -- query cost 0.35
 
 DROP INDEX index_category ON category;
 
 SELECT * FROM category WHERE name LIKE '%action%'; -- query cost 1.85
 
				-- INDEX questão 2 --
 
 CREATE INDEX index_postal_code ON address(postal_code);
 
 SELECT * FROM address WHERE postal_code = '36693'; -- query cost 0.95
 
 DROP INDEX index_postal_code ON address;
 
SELECT * FROM address WHERE postal_code = '36693'; -- query cost 65.40

				-- ALTER TABLE quetão 1 --

USE hr;

SELECT * FROM locations;

ALTER TABLE locations CHANGE address ADDRESS VARCHAR(200);

					-- ALTER TABLE questão 2 --

SELECT * FROM regions;

ALTER TABLE regions CHANGE region_name REGION VARCHAR(25);

					-- ALTER TABLE questão 3 --
	
SELECT * FROM countries;

ALTER TABLE countries CHANGE country_name COUNTRY VARCHAR(40);
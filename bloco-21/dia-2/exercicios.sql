USE Pixar;
SELECT * FROM Pixar.Movies;
SELECT * FROM Pixar.BoxOffice;
SELECT * FROM Pixar.Theater;

-- exercicio 1
SELECT m.title, b.domestic_sales, b.international_sales
FROM Pixar.Movies AS m
INNER JOIN BoxOffice AS b
ON m.id = b.movie_id;

-- exercicio 2
SELECT m.title, b.domestic_sales, b.international_sales
FROM Pixar.Movies AS m
INNER JOIN BoxOffice AS b
ON m.id = b.movie_id
WHERE b.international_sales > b.domestic_sales;

-- exercicio 3
SELECT m.title, b.rating
FROM Pixar.Movies m
INNER JOIN BoxOffice b
ON m.id = b.movie_id
ORDER BY b.rating DESC;

-- exercicio 4
SELECT *
FROM Pixar.Theater AS the
LEFT JOIN Movies AS mov
ON the.id = mov.theater_id
ORDER BY the.name; 

-- SELECT
-- 	t.name,
--     t.location,
--     m.title,
-- 	m.director,
--     m.year,
--     m.length_minutes
-- FROM Theater t
-- 		LEFT JOIN
--     Movies m ON t.id = m.theater_id
-- ORDER BY t.name;

-- exercicio 5
SELECT * FROM Theater t
RIGHT JOIN Movies m
ON m.theater_id = t.id
ORDER BY t.name; 

-- exercicio 6
SELECT title FROM Movies
WHERE id IN (
	SELECT movie_id FROM BoxOffice
    WHERE rating > 7.5
);  -- query cost = 4.37

SELECT m.title, b.rating FROM Movies m
INNER JOIN BoxOffice b
ON m.id = b.movie_id
AND b.rating > 7.5; -- query cost = 2.63

-- exercicio 7
SELECT rating FROM BoxOffice
WHERE movie_id IN (
	SELECT id FROM Movies
    WHERE year > 2009
); -- query cost = 2.63

SELECT m.title, b.rating FROM BoxOffice b
INNER JOIN Movies m
ON b.movie_id = m.id
AND m.year > 2009; -- query cost = 2.63

-- exercicio 8
SELECT name, location FROM Theater t
WHERE EXISTS (
	SELECT * FROM Movies m
    WHERE m.theater_id = t.id
);

-- exercicio 9
SELECT name, location FROM Theater t
WHERE NOT EXISTS (
	SELECT * FROM Movies m
    WHERE m.theater_id = t.id
);
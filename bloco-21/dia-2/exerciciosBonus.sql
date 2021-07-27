USE Pixar;

-- exercicio 10
SELECT * FROM Movies m
INNER JOIN BoxOffice b
ON m.id = b.movie_id
WHERE b.rating > 8
AND m.theater_id IS NOT NULL;

-- exercicio 11
SELECT a.title, a.length_minutes, b.title, b.length_minutes
FROM Movies a, Movies b
WHERE a.director = b.director
AND a.title <> b.title;

-- exercicio 12
SELECT m.title FROM Movies m
WHERE id IN (
	SELECT b.movie_id FROM BoxOffice b
    WHERE b.international_sales >= 500000000
    AND m.length_minutes > 110
); -- query cost = 2.63

SELECT m.title FROM Movies m
INNER JOIN BoxOffice b
ON m.id = b.movie_id
WHERE
	b.international_sales >= 500000000
		AND 
    m.length_minutes > 110; -- query cost = 2.63
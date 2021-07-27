USE BeeMovies;

DELIMITER $$
CREATE TRIGGER trigger_movies_update
	BEFORE UPDATE ON movies
    FOR EACH ROW
BEGIN
	SET NEW.ticket_price_estimation = 
		IF(OLD.ticket_price > NEW.ticket_price,
            'Decreasing',
            'Increasing');
END $$

CREATE TRIGGER trigger_movie_log_update
	AFTER UPDATE ON movies
    FOR EACH ROW
BEGIN
	INSERT INTO movies_logs(movie_id, executed_action, log_date)
    VALUES (NEW.movie_id, 'UPDATE', NOW());
END $$

DELIMITER ;

-- testing --

SELECT * FROM movies;
SELECT * FROM movies_logs;
UPDATE movies
SET ticket_price = 12
WHERE movie_id = 2;
INSERT INTO timeline
(user_id, name, start_date, end_date)
VALUES
($1, $2, $3, $4);

SELECT * FROM timeline;
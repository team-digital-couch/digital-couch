INSERT INTO timeline_event
(timeline_id, title, time, is_approximate, content)
VALUES
($1, $2, $3, $4, $5);

SELECT * FROM timeline_event WHERE timeline_id = $1;
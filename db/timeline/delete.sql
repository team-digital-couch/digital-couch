DELETE FROM timeline_event
WHERE timeline_id = $1;

DELETE FROM timeline
WHERE id = $1;

SELECT * FROM timeline WHERE user_id = $2;
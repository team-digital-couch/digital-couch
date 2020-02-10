UPDATE timeline_event
SET title = $2,
    time = $3,
    is_approximate = $4,
    content = $5
WHERE id = $1;

SELECT * FROM timeline_event;
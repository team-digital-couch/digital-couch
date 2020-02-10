UPDATE timeline
SET name = $2,
    start_date = $3,
    end_date = $4
WHERE id = $1;

SELECT * FROM timeline;
UPDATE journal
SET content = $2
WHERE id = $1;

SELECT * FROM journal;
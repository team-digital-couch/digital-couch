INSERT INTO journal(user_id, start_date, end_date, content, title)
VALUES($1, $2, $3, $4, $5);

SELECT * FROM journal;
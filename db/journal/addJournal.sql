INSERT INTO journal(user_id, time, content, title)
VALUES($1, $2, $3, $4);

SELECT * FROM journal;
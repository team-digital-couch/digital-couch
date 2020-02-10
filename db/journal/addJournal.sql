INSERT INTO journal(user_id, time, content)
VALUES($1, $2, $3);

SELECT * FROM journal;
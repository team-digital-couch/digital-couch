INSERT INTO users
(username, hash, is_provider)
VALUES
($1, $2, $3)
RETURNING *;
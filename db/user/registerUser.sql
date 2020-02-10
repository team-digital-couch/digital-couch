INSERT INTO users
(username, hash, isprovider)
VALUES
($1, $2, $3)
RETURNING *;
SELECT u.username, c.* FROM connections AS c
INNER JOIN users AS u
ON u.user_id = c.client_id
WHERE provider_id = $1;
SELECT u.username, i.* FROM user_info AS i
INNER JOIN users AS u
ON u.user_id = i.user_id
WHERE i.user_id = $1;
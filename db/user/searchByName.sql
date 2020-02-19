SELECT u.username, i.* FROM user_info AS i
INNER JOIN users AS u
ON u.user_id = i.user_id
WHERE CONCAT(i.first_name, ' ', i.last_name) LIKE $1
OR i.last_name LIKE $1
OR u.username LIKE $1;
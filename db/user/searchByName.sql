SELECT * FROM user_info
WHERE CONCAT(first_name, ' ', last_name) like $1;
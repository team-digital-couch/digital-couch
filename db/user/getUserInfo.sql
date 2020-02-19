SELECT u.username, i.*, pc.username AS provider_name, cc.pending FROM user_info AS i
INNER JOIN users AS u
ON u.user_id = i.user_id
FULL JOIN connections AS cc
ON cc.client_id = u.user_id
FULL JOIN (SELECT connections.provider_id, users.username FROM connections INNER JOIN users ON users.user_id = connections.provider_id) AS pc
ON pc.provider_id = cc.provider_id
WHERE u.user_id = $1;
INSERT INTO provider_notes(provider_id, client_id, time, content)
VALUES($1, $2, $3, $4)
RETURNING *;
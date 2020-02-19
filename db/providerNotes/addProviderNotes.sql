INSERT INTO provider_notes(provider_id, client_id, time, content)
VALUES($1, $2, $3, $4);
-- RETURNING *;
SELECT * FROM provider_notes
WHERE provider_id = $1 AND client_id = $2;
INSERT INTO connections
(provider_id, client_id, pending)
VALUES
($1, $2, TRUE);
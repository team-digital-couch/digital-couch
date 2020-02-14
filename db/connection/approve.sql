UPDATE connections
SET pending = FALSE
WHERE connection_id = $1;
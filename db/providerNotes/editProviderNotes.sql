UPDATE provider_notes
SET time = $2,
    content = $3
WHERE id = $1
RETURNING *;
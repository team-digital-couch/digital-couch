-- DELETE FROM provider_notes
-- WHERE id = $1;

-- SELECT * FROM provider_notes

CREATE OR REPLACE FUNCTION deleteProviderNotes(INTEGER) RETURNS SETOF provider_notes AS
$BODY$
DECLARE
    provider__id INTEGER := (SELECT provider_id FROM provider_notes WHERE id = $1);
    client__id INTEGER := (SELECT client_id FROM provider_notes WHERE id = $1);
BEGIN
    DELETE FROM provider_notes
    WHERE id = $1;

    RETURN QUERY SELECT * FROM provider_notes WHERE client_id = client__id AND provider_id = provider__id;
END
$BODY$
LANGUAGE plpgsql;

SELECT * FROM deleteProviderNotes($1);
-- DELETE FROM provider_notes
-- WHERE id = $1;

-- SELECT * FROM provider_notes

-- CREATE OR REPLACE FUNCTION deleteProviderNotes(INTEGER) RETURNS SETOF provider_notes AS
-- $BODY$
-- DECLARE
--     providerNote INTEGER := (SELECT provider_id FROM provider_notes WHERE id = $1);
--     client INTEGER := (SELECT client_id FROM provider_notes WHERE id = $2);
-- BEGIN
--     DELETE FROM provider_notes
--     WHERE id = $1;

--     RETURN QUERY SELECT * FROM provider_notes WHERE id = providerNote;
-- END
-- $BODY$
-- LANGUAGE plpgsql;

-- SELECT * FROM deleteProviderNotes($1);
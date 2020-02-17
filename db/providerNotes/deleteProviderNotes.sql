-- DELETE FROM provider_notes
-- WHERE id = $1;

-- SELECT * FROM provider_notes

-- CREATE OR REPLACE FUNCTION deleteProviderNotes(INTEGER) RETURNS SETOF provider_notes AS
-- $BODY$
-- DECLARE
--     timeline INTEGER := (SELECT timeline_id FROM timeline_event WHERE id = $1);
-- BEGIN
--     DELETE FROM provider_notes
--     WHERE id = $1;

--     RETURN QUERY SELECT * FROM provider_notes WHERE timeline_id = timeline;
-- END
-- $BODY$
-- LANGUAGE plpgsql;

-- SELECT * FROM deleteProviderNotes($1);
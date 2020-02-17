CREATE OR REPLACE FUNCTION deleteEvent(INTEGER) RETURNS SETOF timeline_event AS
$BODY$
DECLARE
    timeline INTEGER := (SELECT timeline_id FROM timeline_event WHERE id = $1);
BEGIN
    DELETE FROM timeline_event
    WHERE id = $1;

    RETURN QUERY SELECT * FROM timeline_event WHERE timeline_id = timeline;
END
$BODY$
LANGUAGE plpgsql;

SELECT * FROM deleteEvent($1);
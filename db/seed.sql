CREATE TABLE users (
user_id SERIAL PRIMARY KEY,
username VARCHAR(50),
hash TEXT,
is_provider BOOLEAN
);

CREATE TABLE user_info (
id SERIAL PRIMARY KEY,
user_id INTEGER,
first_name VARCHAR(50),
last_name VARCHAR(50),
pronouns VARCHAR(50),
avatar TEXT,
insurance_card TEXT,
phone TEXT,
email TEXT,
billing_address VARCHAR(100),
billing_city VARCHAR(40),
billing_zipcode INTEGER,
address VARCHAR(100),
city VARCHAR(40),
zipcode INTEGER,
hours TEXT,
bio TEXT
);

CREATE TABLE connections (
connection_id SERIAL PRIMARY KEY,
client_id INTEGER,
provider_id INTEGER,
pending BOOLEAN
);

-- CREATE TABLE journal (
-- id SERIAL PRIMARY KEY,
-- user_id INTEGER,
-- time TIMESTAMP,
-- content TEXT,
-- title VARCHAR(40)
-- );

CREATE TABLE journal (
id SERIAL PRIMARY KEY,
user_id INTEGER,
start_date TIMESTAMP,
end_date TIMESTAMP,
content TEXT,
title VARCHAR(40)
);

CREATE TABLE timeline (
id SERIAL PRIMARY KEY,
user_id INTEGER,
name VARCHAR(255),
start_date TIMESTAMP,
end_date TIMESTAMP
);

CREATE TABLE timeline_event (
id SERIAL PRIMARY KEY,
timeline_id INTEGER,
title VARCHAR(255),
time TIMESTAMP,
is_approximate BOOLEAN,
content TEXT
);

CREATE TABLE notifications (
id SERIAL PRIMARY KEY,
user_id INTEGER,
content TEXT
);

CREATE TABLE provider_notes (
id SERIAL PRIMARY KEY,
provider_id INTEGER,
client_id INTEGER,
time TIMESTAMP,
content TEXT
);

ALTER TABLE connections
ADD FOREIGN KEY (client_id)
REFERENCES users(user_id);

ALTER TABLE connections
ADD FOREIGN KEY (provider_id)
REFERENCES users(user_id);

ALTER TABLE user_info
ADD FOREIGN KEY (user_id)
REFERENCES users(user_id);

ALTER TABLE journal
ADD FOREIGN KEY (user_id)
REFERENCES users(user_id);

ALTER TABLE timeline
ADD FOREIGN KEY (user_id)
REFERENCES users(user_id);

ALTER TABLE timeline_event
ADD FOREIGN KEY (timeline_id)
REFERENCES timeline(id);

ALTER TABLE notifications
ADD FOREIGN KEY (user_id)
REFERENCES users(user_id);

ALTER TABLE provider_notes
ADD FOREIGN KEY (provider_id)
REFERENCES users(user_id);

ALTER TABLE provider_notes
ADD FOREIGN KEY (client_id)
REFERENCES users(user_id);

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
DROP TABLE IF EXISTS pledges;

CREATE TABLE IF NOT EXISTS pledges (
    id serial PRIMARY KEY,
    donation integer NOT NULL
);

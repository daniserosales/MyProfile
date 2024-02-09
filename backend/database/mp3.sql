DROP TABLE IF EXISTS audio_data CASCADE;

CREATE TABLE audio_data (
    audio_id SERIAL PRIMARY KEY,
    audio_name VARCHAR(200),
    audio_content BYTEA
);

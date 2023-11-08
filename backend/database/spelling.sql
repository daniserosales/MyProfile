DROP TABLE IF EXISTS words CASCADE;
DROP TABLE IF EXISTS room CASCADE;
DROP TABLE IF EXISTS answers CASCADE;



CREATE TABLE words (
    word_id INT GENERATED ALWAYS AS IDENTITY,
    word VARCHAR (255) NOT NULL, 
    user_id INT, 
    token_id INT NOT NULL, 
    PRIMARY KEY (word_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (token_id) REFERENCES tokens(token_id)
);

CREATE TABLE room (
    room_id INT GENERATED ALWAYS AS IDENTITY,
    user_id INT,
    room_id_final INT, 
    room_date DATE,
    PRIMARY KEY (room_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE answers (
    answer_id INT GENERATED ALWAYS AS IDENTITY,
    answer VARCHAR(255) NOT NULL,
    room_id INT NOT NULL,
    user_id INT,
    PRIMARY KEY (answer_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (room_id) REFERENCES room(room_id)
);

INSERT INTO room ( user_id, room_id_final, room_date)
VALUES
(1,3456, '10/25/23');

INSERT INTO answers (answer, room_id, user_id)
VALUES
('shrmp', 1, 1);

INSERT INTO words ( word, user_id, token_id)
VALUES 
( 'shrimp', '1', '1' ),
( 'shoes', '1', '1' ),
( 'fish', '1', '1' ),
( 'brush', '1', '1' ),
( 'flash', '1', '1' ),
( 'fresh', '1', '1' ),
( 'ashore', '1', '1' ),
( 'shock', '1', '1' );



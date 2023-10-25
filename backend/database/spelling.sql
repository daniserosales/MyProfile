DROP TABLE IF EXISTS words CASCADE;

CREATE TABLE words (
    word_id INT GENERATED ALWAYS AS IDENTITY,
    word VARCHAR (255) NOT NULL, 
    user_id INT, 
    token_id INT NOT NULL, 
    PRIMARY KEY (word_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (token_id) REFERENCES tokens(token_id)
);


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


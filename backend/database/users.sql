DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS tokens CASCADE;


CREATE TABLE users (
    user_id INT GENERATED ALWAYS AS IDENTITY,
    first_name VARCHAR(225) NOT NULL,
    last_name VARCHAR(225) NOT NULL, 
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    school VARCHAR(255),
    PRIMARY KEY(user_id)
);

CREATE TABLE tokens (
    token_id INT GENERATED ALWAYS AS IDENTITY,
    user_id INT, 
    token VARCHAR(255) NOT NULL,
    PRIMARY KEY (token_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);


INSERT INTO users (first_name, last_name, email, password, school)
VALUES
    ('User1', 'User1', 'user@user.me','user1', 'Florin Primary School');
    
INSERT INTO tokens (user_id, token)
VALUES
    (1, 'd5e7d720-e5be-464b-9254-f6f94099ab6b');

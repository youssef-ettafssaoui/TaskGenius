CREATE DATABBASE IF NOT EXISTS `todoapp`;

CREATE TABLE todos (
    id VARCHAR(255) PRIMARY KEY,
    user_email VARCHAR(255) NOT NULL,
    title VARCHAR(50),
    progress INT,
    date VARCHAR(300)
);

CREATE TABLE users (
    email VARCHAR(255) PRIMARY KEY,
    hashed_password VARCHAR(255)
);

INSERT INTO users (email, hashed_password) VALUES ('')
INSERT INTO todos (id, user_email, title, progress, date) VALUES (0, 'yettafssaoui2@gmail.com', 'First TODO', 10, 'Sat Feb 18 2023 20:10:58 GMT+0100 (UTC+01:00)');
INSERT INTO todos (id, user_email, title, progress, date) VALUES (1, 'yettafssaoui2@gmail.com', 'Second TODO', 30, 'Sat Feb 18 2023 20:10:58 GMT+0100 (UTC+01:00)');
INSERT INTO todos (id, user_email, title, progress, date) VALUES (2, 'yettafssaoui2@gmail.com', 'Third TODO', 30, 'Sat Feb 18 2023 20:10:58 GMT+0100 (UTC+01:00)');
INSERT INTO todos (id, user_email, title, progress, date) VALUES (3, 'yettafssaoui2@gmail.com', 'TODO', 20, 'Sat Feb 18 2023 20:10:58 GMT+0100 (UTC+01:00)');
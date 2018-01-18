BEGIN;

DROP TABLE IF EXISTS users, posts, messages, chatRooms, diseases, tags, comments;

CREATE TABLE diseases (
    id SERIAL PRIMARY KEY,
    diseaseName VARCHAR(100) NOT NULL
);

INSERT INTO diseases (diseaseName)
VALUES ('cancer');

CREATE TABLE tags (
    id SERIAL PRIMARY KEY,
    tagName VARCHAR(50) NOT NULL,
    diseaseId INTEGER REFERENCES diseases(id)
);

INSERT INTO tags (tagName, diseaseId)
VALUES ('cancer', 1);

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    fullName VARCHAR(40) NOT NULL,
    email VARCHAR(50) NOT NULL,
    password VARCHAR NOT NULL,
    diseaseId INTEGER REFERENCES diseases(id)
);

INSERT INTO users (fullName, email, password,diseaseId)
VALUES ('Michael Brown', 'michaelBrown@healthyminds.com', '123456', 1);


CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    type VARCHAR(40) NOT NULL,
    title VARCHAR(100) NOT NULL,
    content VARCHAR(2000) NOT NULL,
    commentsId INTEGER REFERENCES comments(id),
    time_stamp TIMESTAMP NOT NULL,
    tagIds INTEGER REFERENCES tags(id) 
); 

INSERT INTO posts (type, title, content, time_stamp, tagIds)
VALUES ('story', 'My epic party', 'Hey, all invited', '20017-12-16 06:00:00', 1);


CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    userId INTEGER REFERENCES users(id),
    content VARCHAR(500) NOT NULL,
    love INTEGER NOT NULL,
    time_stamp TIMESTAMP NOT NULL,
    postId INTEGER REFERENCES posts(id)
);

INSERT INTO comments (userId, content, love, time_stamp, postId)
VALUES (1, 'update post with postId', 1, '20017-12-16 06:00:00',1 );


CREATE TABLE chatRooms (
   id SERIAL PRIMARY KEY,
   chatRoomName VARCHAR(50) NOT NULL,
   userCount INTEGER NOT NULL
);


INSERT INTO chatRooms (chatRoomName, userCount)
VALUES ('general',2);

CREATE TABLE messages (
    id SERIAL PRIMARY KEY,
    userId INTEGER REFERENCES users(id),
    content VARCHAR(500) NOT NULL,
    love INTEGER NOT NULL,
    time_stamp TIMESTAMP NOT NULL,
    chatRoomId INTEGER REFERENCES chatRooms(id)
);

INSERT INTO messages (userId, content, love, time_stamp, chatRoomId)
VALUES (1, 'Hey maaaan', 1, '20017-12-16 06:00:00', 1);


COMMIT;
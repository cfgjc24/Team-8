CREATE TABLE IF NOT EXISTS students (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    age INTEGER NOT NULL,
    email TEXT NOT NULL UNIQUE,
    dob TIMESTAMP NOT NULL,
    tutor_id INTEGER,
    FOREIGN KEY (tutor_id) REFERENCES tutors(id) ON DELETE SET NULL
);

CREATE TABLE IF NOT EXISTS tutors (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    age INTEGER NOT NULL,
    email TEXT NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    student_id INTEGER,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (student_id) REFERENCES students(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS comments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    post_id INTEGER,
    student_id INTEGER,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (post_id) REFERENCES posts(id) ON DELETE CASCADE,
    FOREIGN KEY (student_id) REFERENCES students(id) ON DELETE CASCADE
);


-- Adding sample data to the DB to test a few queries
INSERT INTO tutors (first_name, last_name, age, email) VALUES
('Alice', 'Smith', 30, 'alice.smith@example.com'),
('Bob', 'Johnson', 40, 'bob.johnson@example.com');

-- Insert sample data into students
INSERT INTO students (first_name, last_name, age, email, dob, tutor_id) VALUES
('Charlie', 'Brown', 20, 'charlie.brown@example.com', '2003-05-15 00:00:00', 1),
('Diana', 'Prince', 21, 'diana.prince@example.com', '2002-07-22 00:00:00', 1),
('Edward', 'Cullen', 19, 'edward.cullen@example.com', '2004-09-25 00:00:00', 2);

-- Insert sample data into posts
INSERT INTO posts (student_id, content) VALUES
(1, 'This is my first post!'),
(2, 'Hello everyone, excited to be here!'),
(3, 'Just sharing my thoughts on the new project.');

-- Insert sample data into comments
INSERT INTO comments (post_id, student_id, content) VALUES
(1, 2, 'Great post, Charlie!'),
(1, 3, 'I agree with you, Charlie.'),
(2, 1, 'Welcome, Diana!'),
(3, 2, 'Interesting perspective, Edward.');


CREATE DATABASE todo_app;
USE todo_app;

CREATE TABLE todos (
    id integer AUTO_INCREMENT PRIMARY KEY,
    task VARCHAR(255) NOT NULL,
    completed BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

ALTER TABLE todos 
ADD COLUMN updated_at TIMESTAMP NULL DEFAULT NULL 
ON UPDATE CURRENT_TIMESTAMP;


INSERT INTO todos (task) 
VALUES 
('Sample Task 1'),
('Sample Task 2');

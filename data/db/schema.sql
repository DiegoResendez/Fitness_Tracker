DROP DATABASE IF EXISTS fitnessTrackerDB;

CREATE DATABASE fitnessTrackerDB;

USE fitnessTrackerDB;

CREATE TABLE Workout 
(
id int NOT NULL AUTO_INCREMENT,
type VARCHAR NOT NULL (35),
name VARCHAR NOT NULL (35),
duration int NOT NULL,
weight int NOT NULL,
reps int NOT NULL,
sets int NOT NULL,
unique BOOLEAN true,
required BOOLEAN true,
}
]
);


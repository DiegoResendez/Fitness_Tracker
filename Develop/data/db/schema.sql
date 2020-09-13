DROP DATABASE IF EXISTS fitnessTrackerDB;

CREATE DATABASE fitnessTrackerDB;

USE fitnessTrackerDB;

CREATE TABLE Workout 
(
id int NOT NULL,
type VARCHAR NOT NULL,
name VARCHAR NOT NULL,
duration int NOT NULL,
weight int NOT NULL,
reps int NOT NULL,
sets int NOT NULL,
unique BOOLEAN true,
)



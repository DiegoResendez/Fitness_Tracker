// import mongoose from 'mongoose';

const mongoose = require("mongoose");
 
const workoutSchema = new mongoose.Schema(
    {
        exercises: [
          {
            type: String,
            name: String,
            duration: Number,
            weight: Number,
            reps: Number,
            sets: Number,
            unique: true,
            required: true,
          }
        ]
      },
  { timestamps: true },
);
 
const Workout = mongoose.model('Workout', workoutSchema);
 
module.exports = Workout;
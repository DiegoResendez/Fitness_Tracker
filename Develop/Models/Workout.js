const mongoose = require("../../node_modules/mongoose");
const mongooseSchema = mongoose.Schema;
// let db = require("./Models/Workout");


const workoutSchema = new mongooseSchema(
    {
      day:
      {
        type:Date,
        default: Date.now
      },
        exercises: [
          {
            type: 
            {
              type: String,
              trim: true,
              required: "Please enter a workout type."
            },
            name: 
            {
              type:String,
              trim: true,
              required: "Please enter a workout name."
            },
            duration: 
            {
              type: Number,
              required: "Please enter a workout duration."
            },
            weight: Number,
            reps: Number,
            sets: Number,
            distance: Number
          }]
      });
 
const Workout = mongoose.model('Workout', workoutSchema);
 
module.exports = Workout;
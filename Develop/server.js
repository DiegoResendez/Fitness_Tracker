
const express = require("../node_modules/express");
let mongoose = require("../node_modules/mongoose");
// let db = require("./Models/Workout");

const PORT = process.env.PORT || 3500;

const app = express();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use(express.static("Develop/public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitnessTrackerDB",
{
  useNewUrlParser: true,
  useFindAndModify:false
});


app.use(require("./routes"));

app.listen(PORT, () => 
{
  console.log(`App is running on port ${PORT}.`)
})



// mongoose.connect("mongodb://localhost:27017/fitnesTrackerDB", { useNewUrlParser: true })
//   .then(() => {
//     const app = express()

//     app.listen(5000, () => {
//       console.log("Server has started!")
//     });
//   })
  
//   console.log(db);
//   // db.once('connected', async () => {
//     //     console.log("connect success");
//     // });
    

// var Workout = mongoose.model('Workout', WorkoutSchema)

// var workout = [{type: "cardio", name: "Running", duration: 25, distance: 4}]

// Workout.collection.insert(workout, function(er, docs)
// {
// if (err)
// {
//   return console.error(err);
// }
// else
// {
// console.log("Multiple documents inserted to Collection");
// }
// });

// // db.Workout.deleteMany({})
// // .then(() => 
// console.log(db.Workout);
// //Incorrect Syntax
// //  db.insertMany(workoutSeed)
// // db.Workout.insertMany(workoutSeed)
// // .then(data => {
// //     console.log(data.result.n + " records inserted!");
// //     process.exit(0);
// //   })
// //   .catch(err => {
// //     console.error(err);
// //     process.exit(1);
// //   });

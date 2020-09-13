
const express = require("../node_modules/express");
let mongoose = require("../node_modules/mongoose");

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

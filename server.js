//import express for creation of express application
const express = require("express");
//import database route to db.js instead of importing mongoose here.
const connectDB = require("./config/db");
//import dotenv for database connection, commented out, in db.js file.
/*const dotenv = require("dotenv");
dotenv.config({
  path: "./config/config.env",
});*/

//give express to a variable
const app = express();
//create variable for port and declare port
const port = process.env.PORT || 3000;
//tell how data will be presented in json format
app.use(express.json());
//call the function to grab the database.
connectDB();
//connect database, in db.js, not needed.
/*const DB = mongoose
  .connect(process.env.Database.replace("<password>", process.env.PASSWORD), {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("DATABASE IS UP AND RUNNING...");
  })
  .catch((error) => {
    console.log(error.message);
  });
*/
//test a get route.
app.get("/", (request, response) => response.send("API up and Running"));

//Listen to port
app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});

//import express for creation of express application
const express = require("express");
//import mongoose to connect to database
const mongoose = require("mongoose");
//import dotenv for database connection
const dotenv = require("dotenv");
dotenv.config({
  path: "./config.env",
});
//give express to a variable
const app = express();
//create variable for port and declare port
const port = process.env.PORT || 3000;
//tell how data will be presented in json format
app.use(express.json());
//connect database
const DB = mongoose
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

//test a get route.
app.get("/", (request, response) => response.send("API up and Running"));

//Listen to port
app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});

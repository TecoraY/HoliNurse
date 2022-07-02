//route will handle users signing in.
//import express.
const express = require("express");
//import router
const router = express.Router();
//imprts for security/sign in
const jwt = require("jsonwebtoken");
const config = require("config");
//import express validator for login security purposes.
const { check, validationResult } = require("express-validator");
//set the route to the file to go grab the schema.
const User = require("../models/Users");

router.post("/newuser", async (request, response) => {
  //create new user.
  const { fullname, email, password } = request.body;
  user = new User({
    fullname,
    email,
    password,
  });
  //save user to database
  await user.save();
  response.send("User Registered");
});
//post route to allow the creation of the user, creation
//of the user will also come with a jwt for security
//export route
module.exports = router;

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
const User = require("../models/User");

//post route to allow the creation of the user, creation
//of the user will also come with a jwt for security

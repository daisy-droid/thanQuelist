const express = require('express')
const user = require('../controllers/userController')
const app = express()


const bodyparser = require('body-parser');

//require("dotenv").config();
const pool = require("../config/db");
//const { unlinkSync } = require("fs");

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());



const { register } = require("../controllers/users/register");
const { login } = require("../controllers/users/login");



app.post('/login',login)

app.post('/register', register)

a//pp.get('/index', function (req, res) {
    //res.json({ 'access': true })
  //})



  
  module.exports = app

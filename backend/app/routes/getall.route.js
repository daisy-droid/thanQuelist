const express = require('express')
const app = express.Router()



const bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

const getall = require("../controllers/users/getall.controller");

//app.get("/returnall", getall);

module.exports=app
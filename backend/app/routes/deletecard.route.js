const express = require('express')
const app = express()

const controller =require('../controllers/users/deletecard.controller')

app.delete('/delete/:entryid', controller.delete);

module.exports = app

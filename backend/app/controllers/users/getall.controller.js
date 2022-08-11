const pool = require("../../config/db");
const express = require('express')
const app = express.Router()


const bodyparser = require('body-parser');

//get notes
exports.returnall = (req, res) => {
    try {
       // const { userId, title, body } = req.body;

        pool.query('SELECT * FROM notes ORDER BY entryId ASC ', (error,results) => {
            if (error) {
                throw error;
            }
            res.status(200).json(results.rows);
        });


    } catch (error) {

        res.status(400).send(`not created:`)
    }
};
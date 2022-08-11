const pool = require("../../config/db");

//Delete a user
exports.create = (req, res) => {
    try {
        const { userId, title, body } = req.body;

        pool.query('INSERT INTO notes ( userId , title , body) VALUES ($1,$2,$3);', [userId, title, body], (error) => {
            if (error) {
                throw error;
            }
            res.status(200).send(`note created with ID: ${userId}`);
        });


    } catch (error) {

        res.status(400).send(`not created:`)
    }
};
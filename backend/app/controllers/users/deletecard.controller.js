const pool = require("../../config/db");

//Delete a user
module.exports.delete = (req, res) => {
    const id  = parseInt(req.params.entryid);
    try {
     
        pool.query(` DELETE FROM notes WHERE entryid=$1`, [id], (error) => {
            if (error) {
                throw error;
            }
            res.status(200).send(`note created with ID: ${id}`);
        });


    } catch (error) {

        res.status(400).send(`not deleted:`)
    }
};
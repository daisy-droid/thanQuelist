const bcrypt = require("bcrypt");

const pool = require("../../config/db");

const jwt = require("jsonwebtoken");
//Register Function

exports.register = async (req, res) => {
  const { lastname, firstname, email, password } = req.body;
  try {
    const data = await pool.query(`SELECT * FROM users WHERE email= $1;`, [
      email,
    ]); //Check if user exist
    const arr = data.rows;
    if (arr.length != 0) {
      return res.status(400).json({
        error: "Email already there, No need to register again.",
      });
    } else {
      bcrypt.hash(password, 10, (err, hash) => {
        if (err)
          res.status(400).json({
            error: "Sever Error",
          });
        const user = {

          lastname, 
          firstname,
          email,
          password: hash,
        };
        var flag = 1;

        //Inserting data into the database
        pool.query(
          `INSERT INTO users (lastname,firstname, email, password) VALUES ($1,$2,$3,$4);`,
          [user.lastname,user.firstname, user.email, user.password],
          (err) => {
            if (err) {
              flag = 0; //If user is not inserted is not inserted to database assigning flag as 0/false.
              console.error(err);
              return res.status(500).json({
                error: "Database error",
              });
            } else {
              flag = 1;
              res
                .status(200)
                .send({ message: `User called ${firstname} have been added to the database` });
            }
          }
        );
        if (flag) {
          const token = jwt.sign(
            //Signing a jwt token
            {
              email: user.email
            },
            process.env.SECRET_KEY
          );
        }
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: "Database error while registring user!", //Database connection error
    });
  }
};

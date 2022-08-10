require ('dotenv').config()  

const express= require('express');
const client = require('./app/config/db');
const app = express();
const bodyparser = require('body-parser');
const cors = require('cors');


//require("./app/config/dotenv"); //Import your environmental configs

const user = require("./app/routes/userRoutes");



app.use(express.json());
app.use(cors());

app.get('/', function (req, res) {
    res.send('hello');
  });

 client.connect((err)=>{
    //connect to database
    if(err){
        console.log(err)
    }
    else{
        console.log("We have a lift off");
    }
 });

const PORT =process.env.PORT || 3000

app.use('/',(req,res)=>
{
    res.json("data: server is working")
    
})

app.get("/", (request, response) =>{
    response.status(200).send("Sever Initialized and Online. Ready to take OFF!");
});

app.use("/user", user); // User endpoint API

console.log(`server is up at port http://localhost:${PORT}`)

app.listen(3000) , () => console.log('http://localhost:${PORT}')
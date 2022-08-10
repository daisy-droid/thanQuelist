require ('dotenv').config()  

const express= require('express');
const client = require('./app/config/db');
const app = express();

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
console.log(`server is up at port http://localhost:${PORT}`)
app.listen(3000) , () => console.log('http://localhost:${PORT}')
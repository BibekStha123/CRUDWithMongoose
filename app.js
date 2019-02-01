const express = require('express');
const route = require('./routes/route');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const mongoose = require('mongoose');


//cors middleware
app.use(cors());  

//create connection
mongoose.connect('mongodb://localhost:27017/reviseDB');

//on connection
mongoose.connection.on("connected", ()=>{
    console.log("connected ");
});

//root directory
app.get('/', function(req, res){
    res.send('<h1>this is main page</h1>')
})

// middelware
app.use(bodyParser.json());

//importing the route
app.use('/', route);

//setting up the server
app.listen(3000, ()=>{
    console.log("server is running")
})
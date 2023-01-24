const express = require('express');
const mongoose = require('mongoose');
const app = express();


//DB Connect 
require('./config/databaseCo')();

//Routes
//Users routes
app.post('/api/auth/signup', (req,res)=>{
    res.send('Register route');
});

app.post('/api/auth/login', (req,res)=>{
    res.send('Login route');
});

app.get('/api/users', (req,res)=>{
    res.send('Fetch users');
});

//Server
const PORT = process.env.PORT || 5000;
app.listen(5000, () =>{
    console.log(`Server is up and running on port ${PORT} ! ✅`);
});
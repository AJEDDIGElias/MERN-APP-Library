const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User');
const usersRoute = require('./routes/usersRoutes');
const app = express();


//DB Connect 
require('./config/databaseCo')();

//BODY DATA
app.use(express.json());

//Routes
//Users routes

app.use('/api/auth', usersRoute);





//Server
const PORT = process.env.PORT || 5000;
app.listen(5000, () =>{
    console.log(`Server is up and running on port ${PORT} ! ✅`);
});
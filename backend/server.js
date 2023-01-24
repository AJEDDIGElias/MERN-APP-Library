const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User');
const usersRoute = require('./routes/usersRoute');
const error = require('./middlewares/errorMiddlewareHandler');
const bookRouter = require('./routes/bookRoutes');
const app = express();


//DB Connect 
require('./config/databaseCo')();

//BODY DATA
app.use(express.json());

//Error middlewares
app.use(error.errorMiddlewareHandler);

//Routes
//Users routes
app.use('/api/auth', usersRoute);
//Books routes
app.use('/api/books', bookRouter);

//Server
const PORT = process.env.PORT || 5000;
app.listen(5000, () =>{
    console.log(`Server is up and running on port ${PORT} ! ✅`);
});
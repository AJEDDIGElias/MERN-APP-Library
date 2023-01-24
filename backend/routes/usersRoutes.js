const express = require('express');
const User = require('../models/User');
const usersRoute = express.Router();

//Register
usersRoute.post('/signup',async (req, res) =>
{
    try{
        const { email, password } = req.body;
        const user = await User.create({ email, password });
        console.log(user);
        res.send(user);
    }catch (error) {
        console.log(error);
    }
});

//Login
usersRoute.post('/login', (req,res)=>{
    res.send('Login route');
});

//Delete
usersRoute.delete('/:id', (req,res)=>{
    res.send('Delete route');
});

//Fetch Users
usersRoute.get('/', (req,res)=>{
    res.send('Fetch users');
});

module.exports=usersRoute;
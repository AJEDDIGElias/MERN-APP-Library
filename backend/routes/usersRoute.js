const express = require('express');
const User = require('../models/User');
const asyncHandler = require('express-async-handler');
const usersRoute = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const generateToken = require('../utils/generateToken');

//Register
usersRoute.post('/signup', 
asyncHandler(async (req, res) =>{
    const { email, password } = req.body;

    const userExists = await User.findOne({ email: email});
    if (userExists){
        throw new Error('User Exist')
    }
    const userCreated = await User.create({ email, password });
    res.json({
      _id: userCreated._id,
      email: userCreated.email,
      password: userCreated.password,
      token: generateToken(userCreated._id),
    });
  })
);

//Login
usersRoute.post('/login', asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && (await user.isPasswordMatch(password))) {
      //set status code
      res.status(200);
      res.json({
        _id: user._id,
        email: user.password,
        password: user.password,
        token: generateToken(user._id),
      });
    } else {
      res.status(401);
      throw new Error('Invalid credentials');
    }
  })
);

//Delete
usersRoute.delete('/:id', (req,res)=>{
    res.send('Delete route');
});

//Fetch Users
usersRoute.get('/', (req,res)=>{
    res.send('Fetch users');
});

//Profile route
usersRoute.get('/profile/:id', 
//authMiddleware, 
asyncHandler(async (req,res) => {
    const user = await User.findById(req.params.id);

    if (user) {
      res.status(200);
      res.json(user);
    } else {
      res.status(500);
      throw new Error('There are no profile for this account');
    }
  })
);
   

module.exports=usersRoute;
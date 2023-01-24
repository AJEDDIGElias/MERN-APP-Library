const express = require('express');
const app = express();

//Routes
//Users routes
app.post('/api/auth/signup', (req,res)=>{
    res.send('Register route');
});

app.post('/api/auth/login', (req,res)=>{
    res.send('Login route');
});

//Server
const PORT = process.env.PORT || 5000;
app.listen(5000, () =>{
    console.log(`Server is up and running on port ${PORT} ! :)`);
});
const express = require('express');
const app = express();
const mongoose = require('mongoose');

//Connect DB
mongoose.connect('mongodb+srv://Elias:Potatokiller@cluster0.cbdpgrg.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("Connexion à la database réussie ✅"))
.catch((err) => console.log("🚧ERROR - Database Connexion 🚧", err));


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
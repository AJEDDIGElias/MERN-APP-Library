const mongoose = require('mongoose');

const databaseCo = () => {
    //Connect DB
mongoose
.connect('mongodb+srv://Elias:Potatokiller@cluster0.cbdpgrg.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("Connexion à la database réussie ✅"))
.catch((err) => console.log("🚧ERROR - Database Connexion 🚧", err));

};

module.exports = databaseCo;
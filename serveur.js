const express = require("express");
const app = express();
const port = 8000;
const mongoose = require("mongoose");
//const models = require("/models/Users");

//Rapp.use(express.json());

mongoose.connect('mongodb+srv://ayodeodiletchalla:Dieuveille@cluster0.osvnj.mongodb.net/' ,{})

.then(() => {
    console.log("connexion réussie");
})

.catch((error) =>{console.log("erreur de connexion", error)});

app.get('/', (req, res) =>{
    res.send('hello word')
});

app.listen(port, (req, res)=>{
    console.log('serveur http://localhost:${port}');
    
});

const express = require('express');
const cors = require('cors')
const port = 5000;
const app = express();


app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/etudiant',require('../backend/routes/etudiant.route/etudiant.route'));
app.use('/note',require('../backend/routes/note.route/note.route'));
app.use('/filiere',require('../backend/routes/filiere.route/filiere.route'));
app.use('/matiere',require('../backend/routes/matiere.route/matiere.route'));

app.listen(port, ()=>{
    console.log('le server est en marche ');
});
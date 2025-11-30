const{monyenne, admisibility} = require('../function/function')
const Etudiant = require('../models/model.etudiant');
const Note = require('../models/model.note')
const getStudentsController = async (req,res)=>{
    try {
        const students = await Etudiant.getAll();
        res.status(200).json({students});
    }catch(err){
        console.log(err);
        res.status(500).json({message:"erreur lors de la recuperation dans la base de donnée"});
    }
}

const getStudentController  = async (req,res)=>{
    try{
        const id = req.params.id;
        if(!id){
            res.json({message: "entrez l'id"});
        }
        const studentGet = await Etudiant.getStudent(id);
        if (!studentGet || !studentGet.student) {
            console.log("Étudiant non trouvé");
            return res.status(404).json({ 
                message: "Étudiant non trouvé" 
            });
        }
        const noteStudent = studentGet.noteStudent;
        const moyenneStudent = monyenne(noteStudent);
        const admis = admisibility(moyenneStudent.moyenne)
        console.log(admis);
        console.log(studentGet.student);
        res.status(200).json({
            student:studentGet.student,
            moyenne: moyenneStudent.moyenne,
            admis:admis
        });
    }catch(err){
        console.log(err);
        res.status(500).json({message:"erreur au niveau de la base",err});
    }
}
const addMoyenneController = async (req,res)=>{
    try{
        const id = req.params.id
        const note = await Note.getNoteById(id)
        const moyenne = monyenne(note)
        
        res.json({moyenne})
    }catch(err){
        console.log(err);
        res.status(500).json({message:"erreur au niveau de la base",err});
    }
}
const createStudentController  = async (req,res) => {
    try { 
        if(!req.body){
            console.log('le body est vide');
            res.json({message:"veuillez remplir les champ"})
        }
        const {nom, prenom, date_naissance, sexe, id_filiere} = req.body;
        const newStudent = await Etudiant.Create({nom, prenom, date_naissance, sexe, id_filiere});
        res.status(201).json({message:'etudiant crée avec succes',newStudent});
    }catch(err) {
        console.log(err);
        res.status(500).json({message:"erreur lors de la recuperation dans la base de donnée",err});
    }
}

const deleteStudentController  = async (req,res) => {
    try{
        const id = req.params.id;
        if(!id){
            res.json({message:"l'id manque"})
        }
        const suppression = await Etudiant.Delete(id);
        if(!suppression){
            console.log("etudiant non trouve");
            res.status(404).json({message:"etudiant non trouvé"})
        }
        res.status(200).json({message:"etudiant supprime avec succes"});
    }catch(err){
        console.log(err);
        res.status(500).json({message:"erreur lors de la recuperation dans la base de donnée",err});
    }
}

const editStudentController  = async (req,res) => {
    try{
        const {nom, prenom, date_naissance, sexe, id_filiere} = req.body;
        const id = req.params.id;
        const modification = await Etudiant.Edit(id,{nom, prenom, date_naissance, sexe, id_filiere});
        if(!modification){
            console.log('etudiant non trouvé');
            res.status(404).json({message:"etudiant non trové"})
        }
        res.status(200).json({message:"etudiant modifié avec succes"});
    }catch(err){
        console.log(err);
        res.status(500).json({message:"erreur lors de la recuperation dans la base de donnée",err});
    }
}

const getNumberStudentController  = async(req,res) => {
    try{
        const nombre = await Etudiant.studentCount()
        console.log('le nombre est:', nombre)
           return res.status(200).json({nombre});
    }catch(err){
        console.log(err);
        res.status(500).json({message:"erreur lors de la recuperation dans la base de donnée",err});
    }
}

module.exports = {getStudentsController, getStudentController , createStudentController , deleteStudentController , editStudentController , getNumberStudentController, addMoyenneController };
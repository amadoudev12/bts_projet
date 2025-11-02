const{monyenne, admisibility} = require('../../function/function')
const Etudiant = require('../../models/model.etudiant/model.etudiant');

const getStudents = async (req,res)=>{
    try {
        const students = await Etudiant.getAll();
        res.status(200).json({students});
    }catch(err){
        console.log(err);
        res.status(500).json({message:"erreur lors de la recuperation dans la base de donnée"});
    }
}
const getStudent = async (req,res)=>{
    try{
        const id = req.params.id;
        const student = await Etudiant.getStudent(id);
        const studentDetail = student.result[0];
        const noteStudent = student.noteStudent;
        const moyenneStudent = monyenne(noteStudent);
        const admis = admisibility(moyenneStudent)
        res.status(200).json({student:studentDetail,moyenne: moyenneStudent, admis:admis});
    }catch(err){
        console.log(err);
        res.status(500).json({message:"erreur au niveau de la base",err});
    }
}
const createStudent = async (req,res) => {
    try { 
        const {nom, prenom, date_naissance, sexe, id_filiere} = req.body;
        const newStudent = await Etudiant.Create({nom, prenom, date_naissance, sexe, id_filiere});
        res.status(201).json({message:'etudiant crée avec succes',newStudent});
    }catch(err) {
        console.log(err);
        res.status(500).json({message:"erreur lors de la recuperation dans la base de donnée",err});
    }
}

const deleteStudent = async (req,res) => {
    try{
        const id = req.params.id;
        await Etudiant.Delete(id);
        res.status(200).json({message:"etudiant supprime avec succes"});
    }catch(err){
        console.log(err);
        res.status(500).json({message:"erreur lors de la recuperation dans la base de donnée",err});
    }
}
const editStudent = async (req,res) => {
    try{
        const {nom, prenom, sexe, id_filiere} = req.body;
        const id = req.params.id;
        await Etudiant.Edit(id,{nom, prenom, sexe, id_filiere});
        res.status(200).json({message:"etudiant modifié avec succes"});
    }catch(err){
        console.log(err);
        res.status(500).json({message:"erreur lors de la recuperation dans la base de donnée",err});
    }
}

module.exports = {getStudents,getStudent, createStudent,deleteStudent,editStudent};
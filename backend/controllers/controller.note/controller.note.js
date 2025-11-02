const Note = require('../../models/model.note/model.note');


const getNotes = async (req,res) => {
    try{
        const notes = Note.getNote();
        res.status(200).json({notes});
    }catch(err){
        res.status(500).json({err});
    }
}
const getNoteById = async (req,res) =>  {
    try{
        const id = req.params.id;
        const result = await Note.getNoteById(id)
        res.status(200).json({message:"les notes:", result})
    }catch(err){
        console.log(err);
        res.status(500).json({err});
    }
}
const createNote = async (req,res) => {
    try{
        const id = req.params.id
        const {note, id_matiere} = req.body;
        const newNote = await Note.Create(id,{note,id_matiere});
        res.status(201).json({message:"note crée avec success",newNote});
    }catch(err){
        console.log(err);
        res.status(500).json({err});
    }
}
const deleteNote = async (req,res) => {
    try{
        const id = req.params.id;
        await Note.Delete(id);
        res.status(200).json({message:"note supprimée avec success"});
    }catch(err){
        res.status(500).json({err});
    }
}
const editNote = async (req,res) => {
    try{
        const id = req.params.id
        const {note, id_etudiant, id_matiere} = req.body;
        const noteEdit = Note.Edit(id,{note, id_etudiant, id_matiere});
        res.status(200).json({message:"note modidié avec success"});
    }catch(err){
        res.status(500).json({err});
    }
}
module.exports = {getNotes, getNoteById, createNote, deleteNote, editNote};
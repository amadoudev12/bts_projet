const ejs = require('ejs')
const path = require('path')
const { monyenne } = require('../../function/function');
const Note = require('../../models/model.note/model.note');
const pupeteer = require('puppeteer')
const fs = require('fs')
const os = require('os')


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
        const notes = await Note.getNoteById(id)
        //const {moyenne, total} = monyenne(notes)
        //res.status(200).json({message:"les notes:", notes})
        res.status(200).json(notes)
    }catch(err){
        console.log(err);
        res.status(500).json({err});
    }
}

const genererPdf = async (req,res) => {
        const tempDir = path.join(os.tmpdir(),'puppeteer-session'+Date.now())
        fs.mkdirSync(tempDir,{recursive:true})
        console.log(__dirname);
    try{
        const id = req.params.id;
        const notes = await Note.getNoteById(id)
        const {moyenne, total} = monyenne(notes)
        const fichierEjs = path.join(__dirname,"../../views/pdf.ejs")
        const html = await ejs.renderFile(fichierEjs,{notes:notes, moyenne:moyenne, total:total})
        const browser = await pupeteer.launch({
            headless:true,
            userDataDir:tempDir
        })
        const page = await browser.newPage()
        await page.setContent(html)
        const pdf = await page.pdf({
            format:'A4',
            printBackground:true,
            margin:{top:'20mm', bottom:"20mm"}
        })
        await browser.close()
        res.setHeader("Content-Type", "application/pdf")
        res.setHeader("Content-Disposition", "attachment; filename=collante.pdf")
        res.send(pdf)

        setTimeout(()=>{
            try{
                fs.rmSync(tempDir,{recursive:true, force:true})
                console.log('temp supprimer avec succes');
                
            }catch(err){
                console.log('imposible de supprimer le temp');
            }
        },500)
    }catch(err){
        //fs.rmSync(tempDir,{recursive:true, force:true})
        console.log(err);
        res.status(500).send({err});
        setTimeout(()=>{
            try{
                fs.rmSync(tempDir,{recursive:true, force:true})  
            }catch(_){}
        },500)
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
        const result = await Note.Delete(id);
        if(!result){
            res.status(404).json({message:"etudiant non trouve"})
        }
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
        if(!noteEdit){
            res.status(404).json({message:"etudiant non trouve",noteEdit})
        }
        res.status(200).json({message:"note modidié avec success"});
    }catch(err){
        res.status(500).json({err});
    }
}
module.exports = {getNotes, getNoteById, createNote, deleteNote, editNote, genererPdf};
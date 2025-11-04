import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import matiereService from '../api/matiereService'
import etudiantService from '../api/etudiantService'
import NoteForm from '../components/NoteForm'

function notesPost() {
  const [matieres, setMatieres] = useState([])
  const [etudiant, setEtudiant] = useState([])
  const {id} =useParams()
  useEffect(()=> {
    const getEtudiant = async () => {
      try{
        const res = await etudiantService.getById(id)
        console.log(res.data.student);
        setEtudiant(res.data.student)
      }catch(err){
        console.log(err);
      }
    }
    getEtudiant()
  },[])
  useEffect(()=> {
    if(!etudiant.id_filiere){
      console.log('etudiant pas encore charge');
      return
    }
    const getMatiere = async ()=>{
      try{
        const res = await matiereService.getById(etudiant.id_filiere)
      setMatieres(res.data)
      }catch(err){
        console.log(err);
      }
    }
    getMatiere()
  },[etudiant])
  console.log('les matiere',matieres);
  return (
    <div>
      <NoteForm etudiant={etudiant} matieres={matieres}/>
    </div>
  )
}

export default notesPost
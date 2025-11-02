import React,{useState,useEffect} from 'react'
import Form from '../components/form'
import filiereService from "../api/filiereService"

export default function AjouterEtudiant() {
    const [filieres, setFilieres] = useState([])
    //recuperation des filiere
    useEffect(()=> {
        filiereService.getAll()
        .then(res => res.data)
        .then((data) => {
        console.log('les données du backEnd:',data.result);
        setFilieres(data.result)
        })
        .catch(err => console.log(err))
    },[])
  return (
    <div>
       <Form filieres={filieres}/> 
    </div>
  )
}

import React, { useState, useEffect } from 'react'
import etudiantService from '../api/etudiantService'
import filiereService from '../api/filiereService'

export default function FormEdit({ etudiant }) {
  const [filieres, setFilieres] = useState([])
      //recuperation des filiere
    useEffect(()=> {
          filiereService.getAll()
          .then(res => res.data)
          .then((data) => {
          setFilieres(data.result)
          })
          .catch(err => console.log(err))
    },[])
    const [nom, setNom] = useState(etudiant.nom)
    const [prenom, setPreNom] = useState(etudiant.prenom)
    const [date_naissance, setData_Naissance] = useState(etudiant.date_naissance)
    const [sexe, setSexe] = useState(etudiant.sexe)
    const [id_filiere, setId_Filiere] = useState(etudiant.id_filiere)
    const mofifierEtudiant = async ()=>{
        try{
            const res = await etudiantService.Edit(etudiant.id_etudiant,{nom, prenom, date_naissance, sexe, id_filiere})
            console.log(res.data.message);
        }catch(err){
          console.log(err);
        }
    }
  return (
    // Conteneur overlay
    <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm">

      <form className="w-lg bg-white p-6 rounded-lg shadow-lg space-y-4">
          <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
              <h2 className="leading-relaxed">Modifier l'etudiant</h2>
          </div>
        <input 
          type="text" 
          value={nom} 
          onChange={(e)=>{setNom(e.target.value)}}
           className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
        />
        <input 
          type="text" 
          value={prenom} 
          onChange={(e)=>{setPreNom(e.target.value)}}
           className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" 
        />
        <input 
          type="text" 
          value={date_naissance} 
          onChange={(e)=>{setData_Naissance(e.target.value)}}
           className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
        />
        <input 
          type="text" 
          value={sexe} 
          onChange={(e)=>{setSexe(e.target.value)}}
           className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" 
        />
        <select  className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600">
              <option onChange={(e)=>{setId_Filiere(e.target.value)}} value={etudiant.nom_filiere}>selectionner une filiere</option>   
                {    
                    filieres.map((filiere,index) =>(
                        <option key={index} value={filiere.id_filiere}>{filiere.nom_filiere}</option>
                    ))
                }
        </select>
          <div className="pt-4 flex items-center space-x-4">
            <button
                onClick={mofifierEtudiant}
                type="submit"
                className="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none"
            >
                Creer un etudiant
            </button>
          </div>
      </form>
    </div>
  )
}

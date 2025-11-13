import React from "react";
import {Link} from "react-router-dom"
import noteService from "../api/noteService";
export default function ResultCard({ data, setView }) {
  const { student, moyenne, admis } = data;
  const voirCollante = async ()=>{
    try{
      const res = await fetch(`http://localhost:5000/note/collante/${student.id_etudiant}`,{
        headers: {
          "Content-type":"application/pdf"
        }
      })
      if(res.ok){
        alert('collante telecharge')
      }
    }catch(err){
      console.log(err);
      alert('imposible de telecharcher la collante')
      
    }
  }
  return (
    <div className="max-w-md mx-auto  bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
      <h2 className="text-2xl font-bold text-center text-indigo-600 mb-4">
        🎓 Résultat de l’étudiant
      </h2>

      <div className="space-y-2 text-gray-700">
        <p><span className="font-semibold">ID :</span> {student.id_etudiant}</p>
        <p><span className="font-semibold">Nom :</span> {student.nom}</p>
        <p><span className="font-semibold">Prénom :</span> {student.prenom}</p>
        <p><span className="font-semibold">Date de naissance :</span> {student.date_naissance}</p>
        <p><span className="font-semibold">Sexe :</span> {student.sexe}</p>
        <p><span className="font-semibold">Filière  :</span> {student.nom_filiere}</p>
      </div>

      <div className="mt-6 mb-3 bg-indigo-50 rounded-xl p-4 text-center">
        <p className="text-xl font-semibold text-indigo-700">
          Moyenne : <span className="text-2xl">{moyenne}</span> / 20
        </p>

        <p
          className={`mt-2 font-bold text-lg ${
            admis === "admisible" ? "text-green-600" : "text-red-500"
          }`}
        >
          {admis === "admisible" ? " Admis" : " Non admis"}
        </p>
      </div>
      <button onClick={()=>{setView(false)}}  className=" w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 rounded-lg transition-colors">
           Nouvelle  Consultation
      </button>
      <button onClick={()=>{voirCollante()}}  className=" w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 rounded-lg transition-colors">
           Obtenir ma collante
      </button>
    </div>
  )
}
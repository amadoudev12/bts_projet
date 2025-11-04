import React, { useState } from 'react'
import noteService from '../api/noteService'
export default function NoteForm({etudiant, matieres}) {
    const [note, setNote] = useState()
    const [id_matiere, SetIdMatiere] = useState('')
    const sumbmitNote = async () => {
        try{
            const res = await noteService.postNote(etudiant.id_etudiant,{note, id_matiere})
            console.log(res.data.message);
        }catch(err){
            console.log(err)
        }
        setNote('')
        SetIdMatiere('')
    }
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-gradient-to-b from-indigo-50 to-white rounded-2xl shadow-lg border border-indigo-100">
  <h2 className="text-2xl font-bold text-center mb-6 text-indigo-600">
    📘 Enregistrer une note
  </h2>

  <div className="space-y-2 mb-4 text-gray-700">
    <p><span className="font-semibold">Nom :</span> {etudiant.nom}</p>
    <p><span className="font-semibold">Prénom :</span> {etudiant.prenom}</p>
    <p><span className="font-semibold">Date de naissance :</span> {etudiant.date_naissance}</p>
  </div>

  <div className="flex flex-col gap-4">
    <div>
      <label className="block text-sm font-medium text-gray-600 mb-1">Matière</label>
      <select
        
        onChange={(e) => SetIdMatiere(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition"
      >
        <option value="">-- Sélectionnez une matière --</option>
        {matieres.map((matiere, index) => (
          <option key={index} value={matiere.id_matiere}>
            {matiere.nom_matiere} ({matiere.coeficient})
          </option>
        ))}
      </select>
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-600 mb-1">Note</label>
      <input
        type="number"
        min="0"
        max="20"
        placeholder="Entrez la note..."
        onChange={(e) => setNote(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition"
      />
    </div>

    <button
      onClick={sumbmitNote}
      className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 active:scale-[0.98] transition-transform duration-150"
    >
        Ajouter la note
    </button>
  </div>
</div>

  )
}

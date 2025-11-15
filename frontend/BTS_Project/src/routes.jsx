import {Routes, Route} from "react-router-dom"
import {Suspense, lazy} from "react"
import React from 'react'


const AjouterEtudiant = lazy(()=> import('./pages/ajouterEtudiant'))
const ListeEtudiant = lazy(()=> import('./pages/etudiantList'))
const NotesPost = lazy(()=> import('./pages/notesPost'))
const ConsultationEtudiant = lazy(()=> import('./pages/consultationEtudiant'))
const Inscription = lazy(()=> import('./pages/inscription'))

export default function AppRoutes() {
  return (
    <Suspense>
        <Routes>
            <Route path="/etudiants" element={<ListeEtudiant/>}/>
            <Route path="/etudiant/add" element={<AjouterEtudiant/>}/>
            <Route path="/etudiant/note/add/:id" element={<NotesPost/>}/>
            <Route path="/" element={<ConsultationEtudiant/>}/>
            <Route path="/inscription" element={<Inscription/>}/>
        </Routes>
    </Suspense>
  )
}

import {Routes, Route} from "react-router-dom"
import {Suspense, lazy} from "react"
import React from 'react'


const AjouterEtudiant = lazy(()=> import('./pages/ajouterEtudiant'))
const ListeEtudiant = lazy(()=> import('./pages/etudiantList'))

export default function AppRoutes() {
  return (
    <Suspense>
        <Routes>
            <Route path="/etudiants" element={<ListeEtudiant/>}/>
            <Route path="/etudiant/add" element={<AjouterEtudiant/>}/>
        </Routes>
    </Suspense>
  )
}

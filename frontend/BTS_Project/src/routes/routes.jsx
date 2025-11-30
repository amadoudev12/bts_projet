import {Routes, Route} from "react-router-dom"
import {Suspense, lazy} from "react"
import React from 'react'
import ProtectedRoute  from "./protected.route"


const AjouterEtudiant = lazy(()=> import('../pages/ajouterEtudiant'))
const NotesPost = lazy(()=> import('../pages/notesPost'))
const ConsultationEtudiant = lazy(()=> import('../pages/consultationEtudiant'))
const Inscription = lazy(()=> import('../pages/inscription'))
const Login = lazy(()=> import('../pages/login'))
const DaShboard = lazy(()=> import('../pages/dashboard'))
export default function AppRoutes() {
  return (
    <Suspense fallback={<div>loading...</div>}>
        <Routes>
            <Route path="/" element={<ConsultationEtudiant/>}/>
            <Route path="/inscription" element={<Inscription/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route element={<ProtectedRoute/>}>
              <Route path="/etudiant/add" element={<AjouterEtudiant/>}/>
              <Route path="/etudiant/note/add/:id" element={<NotesPost/>}/>
              <Route path="/dashboard" element={<DaShboard/>}/>
            </Route>
        </Routes>
    </Suspense>
  )
}

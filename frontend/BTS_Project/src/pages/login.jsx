import React from 'react'
import { useState } from 'react'
import utilisateurServive from '../api/utilisateurService'
import {  useNavigate } from 'react-router-dom'

export default function Authentification() {
    const navigate = useNavigate()
    const [login, setLogin] = useState('')
    const [password, setPasssord] = useState('')
    const onSubmit = async(e)=>{
        e.preventDefault()
        try{
            const res = await utilisateurServive.login(login, password)
            //const data = await res.data
            console.log(res.data);
            if(res.data.utilisateur){
                localStorage.setItem('token',res.data.token)
                alert(res.data.message)
                navigate('/dashboard')
            }else{
                alert('veuillez entrez des donnees correctes')
            }
        }catch(err){
            console.log(err);
        }
    }
  return (
    <div>
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
                    <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Se connecter</h2>

                        <form onSubmit={onSubmit}  className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Entrez votre login</label>
                                <input 
                                onChange={(e)=>{setLogin(e.target.value)}}
                                type="text" 
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Entrez votre mot de passe</label>
                                <input 
                                onChange={(e)=>{setPasssord(e.target.value)}}
                                type="password" 
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                                />
                            </div>
                            <button type='submit' className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 rounded-lg transition-colors">
                                Connexion
                            </button>
                        </form>
                    </div>
        </div>
    </div>
  )
}

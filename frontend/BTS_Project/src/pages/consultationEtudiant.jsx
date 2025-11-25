import React, {  useState } from 'react'
import etudiantService from '../api/etudiantService'
import AfficherEtudiant from '../components/AfficherEtudiant'
import { Link } from 'react-router-dom'

export default function consultationEtudiant() {
    const [id_P, setId_P] = useState('')
    const [view, setView] = useState(false)
    const [etudiant, setEtudiant] = useState(null)
        const getSudent = async (e) => {
            e.preventDefault()
            try{
                if(!id_P){
                    console.log('entré votre identifiant permanent');
                }else{
                    const res = await etudiantService.getById(id_P)
                    setEtudiant(res.data)
                }
            }catch(err){
                console.log(err)
            }
            setView(true)
            console.log(etudiant);
        }
  return (
    <div>
        <div className='absolute top-0 right-0 m-4 '>
            <Link to='/login' className=" bg-indigo-600 hover:bg-indigo-700 text-white font-medium p-2.5 rounded-lg transition-colors">Se Connecter</Link>
        </div>
        {
            !view && (
                <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
                        <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Consulter mon resultat</h2>
                            
                            <form onSubmit={getSudent} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Identifiant Permanent</label>
                                    <input 
                                    onChange={(e)=>{setId_P(e.target.value)}}
                                    type="text" 
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                                    placeholder="DAA1010100001"
                                    />
                                </div>
                                <button type='submit' className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 rounded-lg transition-colors">
                                    Consulter
                                </button>
                            </form>
                        </div>
                </div>
            )
        }
         {
            view && etudiant ? (
                <AfficherEtudiant data={etudiant} setView={setView}/>
            ):(
                <p>Auncun etudiant trouve</p>
            )
         }
    </div>
  )
}

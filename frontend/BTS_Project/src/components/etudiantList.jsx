import React, { useEffect, useState } from 'react'
import etudiantService from '../api/etudiantService';
import {Link} from "react-router-dom";
import { FaRegTrashAlt } from "react-icons/fa";
import FormEdit from './EditForm';

export default function EtudiantList({filter}) {
    const [etudiants, setEtudiants] = useState([])
    //const [modifier, setModifier] = useState(false)
    const [etudiantAModifier, setEtudiantAModifier] = useState(null)
    const [etudiantFiltre, setEtudiantFilter] = useState([])
    const fonctionMod = async (id) => {
      setEtudiantAModifier(id)
    }
    const deleteEtudiant = async (id) => {
      try {
        await etudiantService.delete(id)
        setEtudiants(etudiants.filter(etudiant => etudiant.id_etudiant !== id))
      } catch (err) {
        console.log(err);
      }
    }
    useEffect(()=>{
      const getEtudiants = async () => {
        try{
            const res = await etudiantService.getAll()
            const dataGet = res.data
            setEtudiants(dataGet.students)
            //console.log(dataGet.students)
        }catch(err){
            console.log(err);
        }
      }
      getEtudiants()
    },[])
    useEffect(()=>{
      if(filter =='tous'){
        setEtudiantFilter(etudiants)
      }else{
        setEtudiantFilter(etudiants.filter((etudiant)=>(etudiant.nom_filiere == filter)))
      }
    },[filter, etudiants])
  return (
    <>
    <div className="max-w-[100vh] mx-auto overflow-auto">
    <div className="relative flex flex-col  h-full text-slate-700 bg-white shadow-md rounded-xl bg-clip-border">
        <div className="relative mx-4 mt-4 overflow-hidden text-slate-700 bg-white rounded-none bg-clip-border">
            <div className="flex items-center justify-between ">
                <div>
                    <h3 className="text-lg font-semibold text-slate-800">Liste des Etudiants</h3>
                </div>
            <div className="flex flex-col gap-2 shrink-0 sm:flex-row">
                <button
                  className="flex select-none items-center gap-2 rounded bg-slate-800 py-2.5 px-4 text-xs font-semibold text-white shadow-md shadow-slate-900/10 transition-all hover:shadow-lg hover:shadow-slate-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button">
                  <Link to="/etudiant/add">Add member</Link>
                </button>
            </div>
            </div>
        
        </div>
        <div className="p-0 overflow-scroll">
            <table className="w-full mt-4 text-left table-auto min-w-max">
            <thead>
                <tr>
                <th
                    className="p-4 transition-colors cursor-pointer border-y border-slate-200 bg-slate-50 hover:bg-slate-100">
                    <p
                    className="flex items-center justify-between gap-2 font-sans text-sm font-normal leading-none text-slate-500">
                      Matricule
                    </p>
                </th>
                <th
                    className="p-4 transition-colors cursor-pointer border-y border-slate-200 bg-slate-50 hover:bg-slate-100">
                    <p
                    className="flex items-center justify-between gap-2 font-sans text-sm font-normal leading-none text-slate-500">
                      Nom
                    </p>
                </th>
                <th
                    className="p-4 transition-colors cursor-pointer border-y border-slate-200 bg-slate-50 hover:bg-slate-100">
                    <p
                    className="flex items-center justify-between gap-2 font-sans text-sm  font-normal leading-none text-slate-500">
                      Prenom
                    </p>
                </th>
                <th
                    className="p-4 transition-colors cursor-pointer border-y border-slate-200 bg-slate-50 hover:bg-slate-100">
                    <p
                    className="flex items-center justify-between gap-2 font-sans text-sm  font-normal leading-none text-slate-500">
                     Date de Naissance
                    </p>
                </th>
                <th
                    className="p-4 transition-colors cursor-pointer border-y border-slate-200 bg-slate-50 hover:bg-slate-100">
                    <p
                    className="flex items-center justify-between gap-2 font-sans text-sm  font-normal leading-none text-slate-500">
                     Sexe
                    </p>
                </th>
                <th
                    className="p-4 transition-colors cursor-pointer border-y border-slate-200 bg-slate-50 hover:bg-slate-100">
                    <p
                    className="flex items-center justify-between gap-2 font-sans text-sm  font-normal leading-none text-slate-500">
                     Filiere
                    </p>
                </th>
                <th
                    className="p-4 transition-colors cursor-pointer border-y border-slate-200 bg-slate-50 hover:bg-slate-100">
                    <p
                    className="flex items-center justify-between gap-2 font-sans text-sm  font-normal leading-none text-slate-500">
                      Actions
                    </p>
                </th>
                </tr>
            </thead>
            <tbody>
                {
                  etudiantFiltre.map((etudiant)=>(
                    <tr key={etudiant.id_etudiant}>
                      <td className="p-4 border-b border-slate-200">
                        <div className="flex items-center gap-3">
                          <div className="flex flex-col">
                              <p className="text-sm font-semibold text-slate-700">
                                {etudiant.id_etudiant}
                              </p>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 border-b border-slate-200">
                        <div className="flex items-center gap-3">
                          <div className="flex flex-col">
                              <p className="text-sm font-semibold text-slate-700">
                                {etudiant.nom}
                              </p>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 border-b border-slate-200">
                        <div className="flex items-center gap-3">
                          <div className="flex flex-col">
                              <p className="text-sm font-semibold text-slate-700">
                                {etudiant.prenom}
                              </p>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 border-b border-slate-200">
                        <div className="flex items-center gap-3">
                          <div className="flex flex-col">
                              <p className="text-sm font-semibold text-slate-700">
                                {etudiant.date_naissance}
                              </p>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 border-b border-slate-200">
                        <div className="flex items-center gap-3">
                          <div className="flex flex-col">
                              <p className="text-sm font-semibold text-slate-700">
                                {etudiant.sexe}
                              </p>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 border-b border-slate-200">
                        <div className="flex items-center gap-3">
                          <div className="flex flex-col">
                              <p className="text-sm font-semibold text-slate-700">
                                {etudiant.nom_filiere}
                              </p>
                          </div>
                        </div>
                      </td>
                      <td className='flex'>     
                                <button
                                  onClick={()=>{fonctionMod(etudiant.id_etudiant)}}
                                  className="relative h-10 max-h-40px w-10 max-w-40px select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-slate-900 transition-all hover:bg-slate-900/10 active:bg-slate-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                  type="button">
                                  <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
                                      className="w-4 h-4">
                                      <path
                                          d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z">
                                      </path>
                                      </svg>
                                  </span>
                                </button>
                                <button
                                  onClick={()=>{deleteEtudiant(etudiant.id_etudiant)}}
                                  className=" relative h-10 max-h-40px w-10 max-w-40px select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-red-600 transition-all hover:bg-slate-900/10 active:bg-slate-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                  type="button">
                                  <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                                      <FaRegTrashAlt/>
                                  </span>
                                </button>
                                <Link
                                  to={`/etudiant/note/add/${etudiant.id_etudiant}`}
                                  className="relative h-10 max-h-40px w-10 max-w-40px select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase  transition-all hover:bg-slate-900/10 active:bg-slate-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                  type="button">
                                  <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                                      Noter
                                  </span>
                                </Link>
                                {
                                  etudiantAModifier === etudiant.id_etudiant && (
                                  <div><FormEdit etudiant={etudiant}/></div>
                                  )
                                }
                      </td>
                    </tr>
                  ))
                }
            </tbody>
            </table>
        </div>
      </div>
    </div>
  </>
  )
}

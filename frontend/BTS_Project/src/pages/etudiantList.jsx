import React, { useEffect, useState } from 'react'
import etudiantService from '../api/etudiantService';
import { tr } from 'zod/v4/locales';

export default function EtudiantList() {
    const [etudiants, setEtudaints] = useState([])
    useEffect(()=>{
      const getEtudiants = async () => {
        try{
            const res = await etudiantService.getAll()
            const dataGet = res.data
            setEtudaints(dataGet.students)
            console.log(dataGet.students)
        }catch(err){
            console.log(err);
        }
      }
      getEtudiants()
    },[])
  return (
    <div className="max-w-[720px] mx-auto">
    <div className="relative flex flex-col w-full h-full text-slate-700 bg-white shadow-md rounded-xl bg-clip-border">
        <div className="relative mx-4 mt-4 overflow-hidden text-slate-700 bg-white rounded-none bg-clip-border">
            <div className="flex items-center justify-between ">
                <div>
                    <h3 className="text-lg font-semibold text-slate-800">Employees List</h3>
                    <p className="text-slate-500">Review each person before edit</p>
                </div>
            <div className="flex flex-col gap-2 shrink-0 sm:flex-row">
                <button
                  className="rounded border border-slate-300 py-2.5 px-3 text-center text-xs font-semibold text-slate-600 transition-all hover:opacity-75 focus:ring focus:ring-slate-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button">
                  View All
                </button>
                <button
                  className="flex select-none items-center gap-2 rounded bg-slate-800 py-2.5 px-4 text-xs font-semibold text-white shadow-md shadow-slate-900/10 transition-all hover:shadow-lg hover:shadow-slate-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button">
                  Add member
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
                    </p>
                </th>
                </tr>
            </thead>
            <tbody>
                {
                  etudiants.map((etudiant)=>(
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
                    </tr>
                  ))
                }
            </tbody>
            </table>
        </div>
      </div>
    </div>
  )
}

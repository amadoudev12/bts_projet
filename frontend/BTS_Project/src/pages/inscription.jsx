import React from 'react'
import {useForm} from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import utilisateurShema from '../schema/utilisateurShema';
import utilisateurService from '../api/utilisateurService'
export default function Inscription () {
  const {register, handleSubmit, reset, formState: {errors}} = useForm({
    resolver: zodResolver(utilisateurShema)
  })
  const onSubmit = async (data)=> {
    console.log(data);
    try {
       await utilisateurService.createUtilisateur(data)
       reset()
    }catch(err){
      console.log(err);
    }
  }
  return (
    <div className="min-h-screen   bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
          <div className="max-w-md mx-auto">
            <div className="flex items-center space-x-5">
              <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
                <h2 className="leading-relaxed">Inscription</h2>
              </div>
            </div>
             {/* formulaire */}
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="divide-y divide-gray-200 ">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div className="flex flex-col">
                    <label className="leading-loose">Nom</label>
                    <input
                      {...register('nom_utilisateur')}
                      type="text"
                      className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    />
                  </div>
                
                  <div className="flex flex-col">
                    <label className="leading-loose">Prenom</label>
                    <input
                      {...register('prenom_utilisateur')}
                      type="text"
                      className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    />
                  </div>
                 
                    <div className="flex flex-col">
                      <label className="leading-loose">Nom utilisateur</label>
                      <div className="relative focus-within:text-gray-600 text-gray-400">
                        <input
                          {...register('login')}
                          type="text"
                          className="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                        />
                      </div>
                    </div>
                  
                    <div className="flex flex-col">
                      <label className="leading-loose">Mot de passe</label>
                      <div className="relative focus-within:text-gray-600 text-gray-400">
                        <input
                          {...register('mot_passe')}
                          type="password"
                          className="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                        />
                      </div>
                    </div>    
                </div>

                <div className="pt-4 flex items-center space-x-4">
                  <button
                    type="submit"
                    className="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none"
                  >
                    Inscription
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

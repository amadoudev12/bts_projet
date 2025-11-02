import {useForm} from "react-hook-form"
import {z} from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
import etudiantService from "../api/etudiantService";
// type filiere = {
//     id:Number,
//     nom_filiere: String
// }
const zodSchema = z.object({
  nom: z.string().max(100,'veuillez saisir un nom  valide'),
  prenom: z.string().max(100,'veuillez saisir un prenom valide'),
  date_naissance: z.string().max(10,'veuillez saisir une date de naissance valide'),
  sexe: z.string().max(25,'veuillez saisir un sexe valide'),
  id_filiere: z.preprocess (
    (val) => Number(val),
    z.number().max(100,'choisir une filiere valide')
  )
})
export default function Form({filieres}) {
    const {
        register,
        handleSubmit,
        reset,
        formState : {errors}
    } = useForm({
        resolver: zodResolver(zodSchema)
    })
    const onSubmit = async (data) => {
      try{
        const res =  await etudiantService.Post(data)
        console.log(res.data);
        reset()
      }catch(err){
        console.log(err);
      }
    }
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
          <div className="max-w-md mx-auto">
            <div className="flex items-center space-x-5">
              <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
                <h2 className="leading-relaxed">Creer un etudiant</h2>
                {/* <p className="text-sm text-gray-500 font-normal leading-relaxed">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p> */}
              </div>
            </div>
{/* formulaire */}
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="divide-y divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div className="flex flex-col">
                    <label className="leading-loose">Nom</label>
                    <input
                      {...register('nom')}  
                      type="text"
                      className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                      placeholder="Nom de l'etudiant"
                    />
                  </div>
                  {errors.nom && <span>{errors.nom.message}</span>}  
                  <div className="flex flex-col">
                    <label className="leading-loose">Prenom</label>
                    <input
                      {...register("prenom")}  
                      type="text"
                      className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                      placeholder="Prenom de l'etudiant"
                    />
                  </div>
                  {errors.prenom && <span>{errors.prenom.message}</span>}   
                  <div className="flex items-center space-x-4">
                    <div className="flex flex-col">
                      <label className="leading-loose">Date de Naissance</label>
                      <div className="relative focus-within:text-gray-600 text-gray-400">
                        <input
                          {...register("date_naissance")}  
                          type="text"
                          className="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                          placeholder="25/02/2020"
                        />
                        <div className="absolute left-3 top-2">
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    {errors.date_naissance && <span>{errors.date_naissance.message}</span>}     
                    <div className="flex flex-col">
                      <label className="leading-loose">Sexe</label>
                      <div className="relative focus-within:text-gray-600 text-gray-400">
                        <select
                          {...register("sexe")}  
                          type="text"
                          className="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                          placeholder="sexe"
                        >
                            <option value="homme">Homme</option>
                            <option value="femme">Femme</option>
                        </select>
                        <div className="absolute left-3 top-2">
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    {errors.sexe && <span>{errors.sexe.message}</span>} 
                  </div>

                  <div className="flex flex-col">
                    <label className="leading-loose">Filiere</label>
                    <select
                          {...register("id_filiere")}  
                          type="text"
                          className="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                          placeholder="filiere"
                    >
                        {
                            filieres.map((filiere,index) =>(
                                <option key={index} value={filiere.id_filiere}>{filiere.nom_filiere}</option>
                            ))
                        }
                    </select>
                  </div>
                  {errors.id_filiere && <span>{errors.id_filiere.message}</span>} 
                </div>

                <div className="pt-4 flex items-center space-x-4">
                  <button
                    type="submit"
                    className="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none"
                  >
                    Create
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

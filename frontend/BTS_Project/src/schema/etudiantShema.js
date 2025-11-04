import {z} from "zod"
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

export default zodSchema
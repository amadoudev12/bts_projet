import z from "zod"
const utilisateurShema = z.object({
    nom_utilisateur: z.string(),
    prenom_utilisateur: z.string(),
    login: z.string(),
    mot_passe: z.string(),
})
export default utilisateurShema
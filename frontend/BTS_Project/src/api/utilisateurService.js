import axiosClient from '../api/axiosClient'

const utilisateurServive = {
    createUtilisateur : (data) => axiosClient.post('/utilisateur', data) 
}
export default utilisateurServive
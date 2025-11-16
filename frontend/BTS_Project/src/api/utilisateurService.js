import axiosClient from '../api/axiosClient'

const utilisateurServive = {
    createUtilisateur : (data) => axiosClient.post('/utilisateur/', data) ,
    login: (login,password) => axiosClient.post('/utilisateur/login',{login, password})
}
export default utilisateurServive
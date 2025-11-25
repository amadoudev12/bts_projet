import axiosClient from "./axiosClient";

 const filiereService = {
    getAll : () =>  axiosClient.get('/filiere/'),
    getCountFil : () =>  axiosClient.get('/filiere/count')
}

export default filiereService
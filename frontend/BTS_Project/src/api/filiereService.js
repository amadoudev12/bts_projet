import axiosClient from "./axiosClient";

 const filiereService = {
    getAll : () =>  axiosClient.get('/filiere/')
}

export default filiereService
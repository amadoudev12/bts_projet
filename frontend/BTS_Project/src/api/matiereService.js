import axiosClient from "./axiosClient";

const matiereService = {
    getById : (id)  =>  axiosClient.get(`/matiere/${id}`),
    getCountMat : ()  =>  axiosClient.get('matiere/count') 
}

export default matiereService
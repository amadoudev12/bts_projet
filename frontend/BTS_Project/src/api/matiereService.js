import axiosClient from "./axiosClient";

const matiereService = {
    getById : (id)  =>  axiosClient.get(`/matiere/${id}`)
}

export default matiereService
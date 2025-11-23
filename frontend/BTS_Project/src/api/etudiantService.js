import axiosClient from "./axiosClient";

const etudiantService = {
    getAll: ()  => axiosClient.get('/etudiant/') ,
    getById: (id)  => axiosClient.get(`/etudiant/${id}`),
    Post : (data) => axiosClient.post('/etudiant/',data),
    delete : (id) => axiosClient.delete(`/etudiant/${id}`),
    Edit : (id,data) => axiosClient.put(`/etudiant/${id}`,data),
    count: ()=>  axiosClient.get('/etudiant/count')
}
export default etudiantService
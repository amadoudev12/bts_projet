import axiosClient from "./axiosClient";

const noteService = {
    getById :  (id)  =>  axiosClient.get(`/note/${id}`),
    postNote : (id,data) =>  axiosClient.post(`/note/${id}`, data)
}

export default noteService
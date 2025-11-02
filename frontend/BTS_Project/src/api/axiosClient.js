import axios from "axios"
const axiosClient = axios.create({
    baseURL: "http://localhost:5000",
    headers: {
        "Content-Type":"Application/json"
    }
})

export default axiosClient
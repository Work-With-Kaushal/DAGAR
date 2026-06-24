import axios from "axios";

const API = axios.create({
    baseURL: "https://dagar-backend.onrender.com/api",
});

export default API;
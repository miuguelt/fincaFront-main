import axios from "axios";

const api = axios.create({
  baseURL: "https://fincavillaluz.onrender.com",
});

export default api;
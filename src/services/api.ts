import axios from "axios";

const api = axios.create({
  baseURL: "https://backend:8081",
});

export default api;
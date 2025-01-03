import axios from "axios";

const api = axios.create({
  baseURL: "http://backend:8081",
});

export default api;
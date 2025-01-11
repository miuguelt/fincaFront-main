import axios from "axios";

export const api = axios.create({
  baseURL: "https://back:80",  // URL base del backend
  headers: {
    'Content-Type': 'application/json',  // Indica el tipo de contenido
  },
  withCredentials: true,  // Permite el envío de credenciales (cookies, tokens)
});

export default api;
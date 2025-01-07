import axios from "axios";

const api = axios.create({
  baseURL: "https://finca.isladigital.xyz",
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'https://finca.isladigital.xyz',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
    'Access-Control-Allow-Headers': 'Content-Type',
  },
  withCredentials: true
});

export default api;
import axios from "axios";

const api = axios.create({
  baseURL: "https://finca.isladigital.xyz",
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
    'Access-Control-Allow-Headers': 'Content-Type',
  }
});

export default api;
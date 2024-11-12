// api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api', // Substitua pela URL real da API.
});

export default api;

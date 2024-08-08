// 
// axiosClient.js
import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://www.themealdb.com/api/json/v1/1/', // Ověřte, že tato URL je správná
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosClient;

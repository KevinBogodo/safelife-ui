import axios from 'axios';
axios.defaults.headers.common["X-API-Version"]= "1";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://127.0.0.1:8000/api', // URL de base
  timeout: 15000, // Temps maximum pour les requêtes
  headers: {
    'Content-Type': 'application/json',
  },
});

// Intercepteur de requêtes
axiosInstance.interceptors.request.use(
  (config) => {
    // Ajouter un token si nécessaire
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Intercepteur de réponse
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;

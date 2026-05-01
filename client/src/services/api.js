import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_URL;

if (!BASE_URL) {
  throw new Error("API URL not defined");
}

const api = axios.create({
  baseURL: BASE_URL,
});

// Attach token automatically
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;
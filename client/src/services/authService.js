import axios from "axios";

const API_URL = "/api/auth";

// REGISTER
export const registerUser = async (userData) => {
  const res = await axios.post(`${API_URL}/register`, userData);
  if (res.data.token) {
    localStorage.setItem("token", res.data.token);
  }
  return res.data;
};

// LOGIN
export const loginUser = async (userData) => {
  const res = await axios.post(`${API_URL}/login`, userData);
  if (res.data.token) {
    localStorage.setItem("token", res.data.token);
  }
  return res.data;
};

// LOGOUT
export const logoutUser = () => {
  localStorage.removeItem("token");
};

// GET TOKEN
export const getToken = () => {
  return localStorage.getItem("token");
};
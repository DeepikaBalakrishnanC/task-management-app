import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_URL;

if (!BASE_URL) {
  throw new Error("API URL not defined");
}

const API_URL = `${BASE_URL}/api/auth`;

// REGISTER
export const registerUser = async (userData) => {
  try {
    const res = await axios.post(`${API_URL}/register`, userData);

    if (res.data.token) {
      localStorage.setItem("token", res.data.token);
    }

    return res.data;
  } catch (error) {
    throw error.response?.data?.message || "Registration failed";
  }
};

// LOGIN
export const loginUser = async (userData) => {
  try {
    const res = await axios.post(`${API_URL}/login`, userData);

    if (res.data.token) {
      localStorage.setItem("token", res.data.token);
    }

    return res.data;
  } catch (error) {
    throw error.response?.data?.message || "Login failed";
  }
};

// LOGOUT
export const logoutUser = () => {
  localStorage.removeItem("token");
};

// GET TOKEN
export const getToken = () => {
  return localStorage.getItem("token");
};
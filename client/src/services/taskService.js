import axios from "axios";

const API_URL = "/api/tasks";

// GET TASKS
export const getTasks = async (token) => {
  const response = await axios.get(API_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
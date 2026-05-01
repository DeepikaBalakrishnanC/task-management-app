import axios from "axios";

const API_URL = "/api/tasks";

// GET TASKS
export const getTasks = async (token) => {
  const res = await axios.get(API_URL, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

// ADD TASK
export const addTask = async (taskData, token) => {
  const res = await axios.post(API_URL, taskData, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

// UPDATE TASK
export const updateTask = async (id, updatedData, token) => {
  const res = await axios.put(`${API_URL}/${id}`, updatedData, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

// DELETE TASK
export const deleteTask = async (id, token) => {
  const res = await axios.delete(`${API_URL}/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};
import api from "./api";

// GET TASKS
export const getTasks = async () => {
  try {
    const res = await api.get("/api/tasks");
    return res.data;
  } catch (error) {
    throw error.response?.data?.message || "Failed to fetch tasks";
  }
};

// ADD TASK
export const addTask = async (taskData) => {
  try {
    const res = await api.post("/api/tasks", taskData);
    return res.data;
  } catch (error) {
    throw error.response?.data?.message || "Failed to add task";
  }
};

// UPDATE TASK
export const updateTask = async (id, updatedData) => {
  try {
    const res = await api.put(`/api/tasks/${id}`, updatedData);
    return res.data;
  } catch (error) {
    throw error.response?.data?.message || "Failed to update task";
  }
};

// DELETE TASK
export const deleteTask = async (id) => {
  try {
    const res = await api.delete(`/api/tasks/${id}`);
    return res.data;
  } catch (error) {
    throw error.response?.data?.message || "Failed to delete task";
  }
};
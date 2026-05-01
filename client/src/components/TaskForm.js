import React, { useState } from "react";
import { addTask } from "../services/taskService";

function TaskForm({ closeForm, refreshTasks }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5ZjNkNmYxN2JhODVlMWQ0ZjFlYWVhZiIsImlhdCI6MTc3NzU5NzgyMCwiZXhwIjoxNzc4MjAyNjIwfQ.HPPiwzPqTbhgpOAgS8gX-MAEp_t4DDuKHSsli6MCaPQ";

  const handleSubmit = async (e) => {
    e.preventDefault();

    await addTask({ title, description }, token);

    refreshTasks(); // reload tasks
    closeForm();    // close form
  };

  return (
    <div className="card p-3 mb-3">
      <h5>Add Task</h5>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          className="form-control mb-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <textarea
          placeholder="Description"
          className="form-control mb-2"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button className="btn btn-success me-2">
          Save
        </button>

        <button
          type="button"
          className="btn btn-secondary"
          onClick={closeForm}
        >
          Cancel
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
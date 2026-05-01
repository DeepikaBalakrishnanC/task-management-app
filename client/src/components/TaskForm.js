import React, { useState } from "react";

function TaskForm({ closeForm }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({ title, description }); // later connect API

    closeForm();
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

        <button className="btn btn-success me-2">Save</button>
        <button className="btn btn-secondary" onClick={closeForm}>
          Cancel
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
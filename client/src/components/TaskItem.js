import React from "react";
import { updateTask } from "../services/taskService";

function TaskItem({ task, onDelete, onUpdate }) {
  const token = localStorage.getItem("token");

  // 🔄 TOGGLE STATUS
  const handleToggle = async () => {
    try {
      const newStatus =
        task.status === "completed" ? "pending" : "completed";

      const updatedTask = await updateTask(
        task._id,
        { status: newStatus },
        token
      );

      onUpdate(updatedTask); // 🔥 update UI without reload
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="col-md-4">
      <div className="card p-3 mb-3 shadow-sm">

        {/* TITLE */}
        <h5>{task.title}</h5>

        {/* DESCRIPTION */}
        <p>{task.description}</p>

        {/* STATUS BADGE */}
        <span
          className={`badge ${
            task.status === "completed"
              ? "bg-success"
              : "bg-warning text-dark"
          }`}
        >
          {task.status}
        </span>

        {/* ACTIONS */}
        <div className="mt-3 d-flex justify-content-between">

          {/* TOGGLE STATUS */}
          <button
            className="btn btn-sm btn-success"
            onClick={handleToggle}
          >
            Toggle
          </button>

          {/* DELETE */}
          <button
            className="btn btn-sm btn-danger"
            onClick={() => onDelete(task._id)}
          >
            Delete
          </button>
        </div>

      </div>
    </div>
  );
}

export default TaskItem;
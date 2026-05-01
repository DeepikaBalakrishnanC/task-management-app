import React from "react";

function TaskItem({ task }) {
  return (
    <div className="col-md-4">
      <div className="card p-3 mb-3 shadow-sm">
        <h5>{task.title}</h5>
        <p>{task.description}</p>

        <span className="badge bg-info">{task.status}</span>

        <div className="mt-3 d-flex justify-content-between">
          <button className="btn btn-sm btn-warning">Edit</button>
          <button className="btn btn-sm btn-danger">Delete</button>
        </div>
      </div>
    </div>
  );
}

export default TaskItem;
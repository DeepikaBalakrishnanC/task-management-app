import React, { useEffect, useState, useCallback } from "react";
import { getTasks, deleteTask } from "../services/taskService";
import TaskItem from "../components/TaskItem";
import TaskForm from "../components/TaskForm";

function TaskPage() {
  const [tasks, setTasks] = useState([]);
  const [showForm, setShowForm] = useState(false);

  // NEW STATES
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("newest");

  const token = localStorage.getItem("token");

  // FETCH TASKS
  const fetchTasks = useCallback(async () => {
  try {
    const data = await getTasks(token);
    setTasks(data);
  } catch (err) {
    console.error(err);
  }
}, [token]);

useEffect(() => {
  fetchTasks();
}, [fetchTasks]);

  // UPDATE TASK (for toggle/edit)
const handleUpdate = (updatedTask) => {
  setTasks((prevTasks) =>
    prevTasks.map((task) =>
      task._id === updatedTask._id ? updatedTask : task
    )
  );
};

  // DELETE TASK
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this task?")) return;

    await deleteTask(id, token);

   setTasks((prevTasks) =>
  prevTasks.filter((task) => task._id !== id)
);
  };

  // 🔥 FILTER + SEARCH + SORT
  const processedTasks = tasks
    .filter((task) => {
      if (filter === "all") return true;
      return task.status === filter;
    })
    .filter((task) =>
      task.title.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sort === "newest") {
        return new Date(b.createdAt) - new Date(a.createdAt);
      } else {
        return new Date(a.createdAt) - new Date(b.createdAt);
      }
    });

  return (
    <div className="container mt-4">

      {/* ADD TASK BUTTON */}
      <button
        className="btn btn-primary mb-3"
        onClick={() => setShowForm(true)}
      >
        + Add Task
      </button>

      {/* FORM */}
      {showForm && (
        <TaskForm
          closeForm={() => setShowForm(false)}
          refreshTasks={fetchTasks}
        />
      )}

      {/* 🔥 FILTER / SEARCH / SORT */}
      <div className="d-flex gap-2 mb-3">

        <select
          className="form-select"
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>

        <select
          className="form-select"
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
        </select>

        <input
          type="text"
          className="form-control"
          placeholder="Search tasks..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* TASK LIST */}
      <div className="row">
        {processedTasks.length === 0 ? (
          <p>No tasks found</p>
        ) : (
          processedTasks.map((task) => (
            <TaskItem
              key={task._id}
                    task={task}
                    onDelete={handleDelete}
                    onUpdate={handleUpdate} 
            />
          ))
        )}
      </div>
    </div>
  );
  
}

export default TaskPage;
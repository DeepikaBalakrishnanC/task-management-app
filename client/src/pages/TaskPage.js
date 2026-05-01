import React, { useEffect, useState } from "react";
import {
  getTasks,
  deleteTask,
} from "../services/taskService";
import TaskItem from "../components/TaskItem";
import TaskForm from "../components/TaskForm";

function TaskPage() {
  const [tasks, setTasks] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const token = "YOUR_TOKEN_HERE";

  // FETCH TASKS
  const fetchTasks = async () => {
    const data = await getTasks(token);
    setTasks(data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // DELETE TASK
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this task?")) return;

    await deleteTask(id, token);

    // update UI instantly
    setTasks(tasks.filter((task) => task._id !== id));
  };

  return (
    <div className="container mt-4">
      <button
        className="btn btn-primary mb-3"
        onClick={() => setShowForm(true)}
      >
        + Add Task
      </button>

      {showForm && (
        <TaskForm
          closeForm={() => setShowForm(false)}
          refreshTasks={fetchTasks}
        />
      )}

      <div className="row">
        {tasks.length === 0 ? (
          <p>No tasks available</p>
        ) : (
          tasks.map((task) => (
            <TaskItem
              key={task._id}
              task={task}
              onDelete={handleDelete}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default TaskPage;
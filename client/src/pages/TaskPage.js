import React, { useEffect, useState } from "react";
import { getTasks } from "../services/taskService";
import TaskItem from "../components/TaskItem";
import TaskForm from "../components/TaskForm";

function TaskPage() {
  const [tasks, setTasks] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const token = "YOUR_TOKEN_HERE";

  const fetchTasks = async () => {
    const data = await getTasks(token);
    setTasks(data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="container mt-4">
      <button
        className="btn btn-primary mb-3"
        onClick={() => setShowForm(true)}
      >
        + Add Task
      </button>

      {showForm && <TaskForm closeForm={() => setShowForm(false)} />}

      <div className="row">
        {tasks.map((task) => (
          <TaskItem key={task._id} task={task} />
        ))}
      </div>
    </div>
  );
}

export default TaskPage;
// import logo from './logo.svg';
// import { useEffect } from "react";
// import { getTasks } from "./services/taskService";
// import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import TaskPage from "./pages/TaskPage";
import PrivateRoute from "./components/PrivateRoute";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route
          path="/tasks"
          element={
            <PrivateRoute>
              <TaskPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;


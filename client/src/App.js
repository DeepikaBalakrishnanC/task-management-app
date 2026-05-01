// import logo from './logo.svg';
import { useEffect } from "react";
import { getTasks } from "./services/taskService";
// import './App.css';

function App() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5ZjNkNmYxN2JhODVlMWQ0ZjFlYWVhZiIsImlhdCI6MTc3NzU4ODYyMiwiZXhwIjoxNzc4MTkzNDIyfQ.oErMQTLdLSMrHZYEuF6ZqaJpzvRw6rHyNlMuB0pE2uE";
        const data = await getTasks(token);
        console.log("Tasks:", data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

return <h1>Frontend Connected 🚀</h1>;
}

export default App;


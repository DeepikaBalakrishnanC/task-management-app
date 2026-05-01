import React, { useState } from "react";
import { registerUser } from "../services/authService";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await registerUser({ name, email, password });
      navigate("/tasks");
    } catch (error) {
      alert("Registration failed");
    }
  };

  return (
    <div className="container mt-5">
      <h3>Register</h3>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          className="form-control mb-2"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          className="form-control mb-2"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button className="btn btn-success">Register</button>
      </form>
    </div>
  );
}

export default RegisterPage;
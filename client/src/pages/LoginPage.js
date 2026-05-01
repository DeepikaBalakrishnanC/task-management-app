import React, { useState } from "react";
import { loginUser } from "../services/authService";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await loginUser({ email, password });
      navigate("/tasks");
    } catch (error) {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="container mt-5">
      <h3>Login</h3>

      <form onSubmit={handleSubmit}>
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

        <button className="btn btn-primary">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
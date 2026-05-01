import React from "react";
import { logoutUser } from "../services/authService";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate(); // 🔥 needed

  const handleLogout = () => {
    logoutUser();        // remove token
    navigate("/login");  // redirect
  };

  return (
    <nav className="navbar navbar-dark bg-dark px-3">
      <h3 className="text-white">SmartTask Hub 🚀</h3>

      <button
        className="btn btn-outline-light"
        onClick={handleLogout}   // 🔥 important
      >
        Logout
      </button>
    </nav>
  );
}

export default Navbar;
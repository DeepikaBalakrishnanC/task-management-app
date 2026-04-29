const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

// Load env
dotenv.config();

// Connect DB
connectDB();

// Initialize app FIRST
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes (AFTER app is created)
const taskRoutes = require("./routes/taskRoutes");
app.use("/api/tasks", taskRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

// Port
const PORT = process.env.PORT || 5001;

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
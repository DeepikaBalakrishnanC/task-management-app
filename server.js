const taskRoutes = require("./routes/taskRoutes");

app.use("/api/tasks", taskRoutes);

const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const express = require("express");

const app = express();
const PORT = 5001;

// Middleware
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
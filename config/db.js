const mongoose = require("mongoose");

const getMongoUri = () => {
  const uri = process.env.MONGO_URI || process.env.MONGODB_URI || process.env.DATABASE_URL;

  if (!uri) {
    throw new Error(
      "Missing MongoDB connection string. Set MONGO_URI in Render to your MongoDB URI."
    );
  }

  if (!uri.startsWith("mongodb://") && !uri.startsWith("mongodb+srv://")) {
    throw new Error(
      'Invalid MongoDB connection string. MONGO_URI must start with "mongodb://" or "mongodb+srv://".'
    );
  }

  return uri;
};

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(getMongoUri());

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("Database connection failed:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;

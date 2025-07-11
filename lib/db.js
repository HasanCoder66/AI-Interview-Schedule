import mongoose from "mongoose";

const connectDB = async () => {
  try {
    if (mongoose.connections[0].readyState) return;

    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "ai-recruiter-schedule",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("✅ MongoDB Connected Successfully");
  } catch (error) {
    console.log("❌ MongoDB Connection Failed:", error);
    throw new Error("Connection failed!");
  }
};

export default connectDB;

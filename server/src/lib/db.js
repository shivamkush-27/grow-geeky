import mongoose from "mongoose";
async function connectToDatabase() {
  try {
    const dbURI = process.env.DATABASE_URL;
    if (!dbURI) throw Error("DATABASE_URL not provided in .env");
    await mongoose.connect(dbURI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1);
  }
}

export { connectToDatabase };

import mongoose from "mongoose";
const mongoUrl: string = process.env.MONGODB_URL || "";
export const mongoDbConnection = async () => {
  try {
    await mongoose.connect(mongoUrl, {
      dbName: "ScriptSage",
    });
    console.log("Database connect successfully");
  } catch (error) {
    console.log(error);
  }
};

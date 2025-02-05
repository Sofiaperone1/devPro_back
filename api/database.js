import mongoose from "mongoose";
import dotenv from "dotenv";

// Cargar las variables de entorno usando dotenv
dotenv.config();

export const connectDB = async () => {
  try {
    mongoose.set("strictQuery", true);
    const db = await mongoose.connect(process.env.MONGO_URL);
    console.log("dbb", db.connection.name);
    mongoose.connection.db.listCollections().toArray(function (err, collections) {
      console.log("colecciones", collections);
    }); 
  } catch (error) {
    console.log(error);
  }
};
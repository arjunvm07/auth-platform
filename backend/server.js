import express from "express"
import { connectDB } from "./db/connectDB.js";
import  authRoutes from "./routes/auth.route.js"
import dotenv from  "dotenv"
const app = express();
const PORT = process.env.PORT || 5000;
dotenv.config();
app.use(express.json());

app.use("/api/auth",authRoutes);
app.listen(PORT,()=>{
  connectDB();
  console.log("server is running",PORT)
});
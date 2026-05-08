import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import appRoutes from "./routes/appRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import recordRoutes from "./routes/recordRoutes.js";
import dynamicRoutes from "./routes/dynamicRoutes.js";
import schemaRoutes from "./routes/schemaRoutes.js";
import dynamicDbRoutes from "./routes/dynamicDbRoutes.js";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: "https://ai-app-generator-client.onrender.com",
    credentials: true,
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "AI App Generator Backend Running",
  });
});

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/apps", appRoutes);
app.use("/api/records", recordRoutes);
app.use("/api", dynamicRoutes);
app.use("/api", schemaRoutes);
app.use("/api", dynamicDbRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
import express from "express";

import {
  createApp,
  getApps,
} from "../controllers/appController.js";

import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", authMiddleware, createApp);

router.get("/", authMiddleware, getApps);

export default router;
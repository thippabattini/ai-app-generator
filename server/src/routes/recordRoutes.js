import express from "express";

import {
  createRecord,
  getRecords,
  updateRecord,
  deleteRecord,
} from "../controllers/recordController.js";

import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", authMiddleware, createRecord);

router.get("/:appId", authMiddleware, getRecords);

router.put("/:recordId", authMiddleware, updateRecord);

router.delete("/:recordId", authMiddleware, deleteRecord);

export default router;
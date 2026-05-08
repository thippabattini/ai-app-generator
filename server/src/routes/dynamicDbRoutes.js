import express from "express";

import {
  createDynamicRecord,

  getDynamicRecords,

  updateDynamicRecord,

  deleteDynamicRecord,
} from "../controllers/dynamicDbController.js";

const router = express.Router();

router.post(
  "/runtime/:table",
  createDynamicRecord
);

router.get(
  "/runtime/:table",
  getDynamicRecords
);
router.put(
  "/runtime/:table/:id",

  updateDynamicRecord
);

router.delete(
  "/runtime/:table/:id",

  deleteDynamicRecord
);

export default router;
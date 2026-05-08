import express from "express";

import schemaConfig from "../config/schemaConfig.js";

import validateSchemaData from "../utils/schemaValidator.js";

const router = express.Router();

router.post(
  "/dynamic/:table",

  (req, res) => {
    const table =
      req.params.table;

    const schema =
      schemaConfig.find(
        (item) =>
          item.table === table
      );

    if (!schema) {
      return res.status(404).json({
        success: false,

        message:
          "Schema not found",
      });
    }

    const validation =
      validateSchemaData(
        schema,
        req.body
      );

    if (!validation.valid) {
      return res.status(400).json({
        success: false,

        errors:
          validation.errors,
      });
    }

    return res.status(200).json({
      success: true,

      table,

      payload: req.body,

      dynamic: true,
    });
  }
);

export default router;
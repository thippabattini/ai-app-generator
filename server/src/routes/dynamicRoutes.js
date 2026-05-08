import express from "express";

import dynamicApiConfig from "../config/dynamicApiConfig.js";

const router = express.Router();

dynamicApiConfig.forEach(
  (apiConfig) => {
    const method =
      apiConfig.method.toLowerCase();

    router[method](
      apiConfig.endpoint,

      async (req, res) => {
        try {
          res.status(200).json({
            success: true,

            dynamic: true,

            endpoint:
              apiConfig.endpoint,

            data:
              apiConfig.response,
          });
        } catch (error) {
          res.status(500).json({
            success: false,

            message:
              "Dynamic API failed",
          });
        }
      }
    );
  }
);

export default router;
import prisma from "../utils/prisma.js";

import schemaConfig from "../config/schemaConfig.js";

import validateSchemaData from "../utils/schemaValidator.js";

export const createDynamicRecord = async (
  req,
  res
) => {
  try {
    const table = req.params.table;

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

    const record =
      await prisma.dynamicRecord.create({
        data: {
  tableName: table,

  userId: req.user.id,

  data: req.body,
},
      });

    res.status(201).json({
      success: true,

      dynamic: true,

      record,
    });
  }catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,

      message:
        "Failed to create dynamic record",
    });
  }
};

export const getDynamicRecords = async (
  req,
  res
) => {
  try {
    const table = req.params.table;

    const records =
      await prisma.dynamicRecord.findMany({
        where: {
          tableName: table,
          userId: req.user.id,
        },

        orderBy: {
          createdAt: "desc",
        },
      });

    res.status(200).json({
      success: true,

      dynamic: true,

      records,
    });
  }  catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,

      message:
        "Failed to fetch dynamic records",
    });
  }
};

export const updateDynamicRecord =
  async (req, res) => {
    try {
      const {
        table,
        id,
      } = req.params;

      const schema =
        schemaConfig.find(
          (item) =>
            item.table ===
            table
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

      const updatedRecord =
        await prisma.dynamicRecord.update({
          where: {
            id,
          },

          data: {
            data: req.body,
          },
        });

      res.status(200).json({
        success: true,

        dynamic: true,

        updatedRecord,
      });
    } catch (error) {
      console.error(error);

      res.status(500).json({
        success: false,

        message:
          "Failed to update record",
      });
    }
  };

export const deleteDynamicRecord =
  async (req, res) => {
    try {
      const { id } =
        req.params;

      await prisma.dynamicRecord.delete({
        where: {
          id,
        },
      });

      res.status(200).json({
        success: true,

        dynamic: true,

        message:
          "Record deleted successfully",
      });
    } catch (error) {
      console.error(error);

      res.status(500).json({
        success: false,

        message:
          "Failed to delete record",
      });
    }
  };
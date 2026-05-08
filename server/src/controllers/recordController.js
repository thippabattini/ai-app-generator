import prisma from "../utils/prisma.js";

export const createRecord = async (req, res) => {
  try {
    const { appId, data } = req.body;

    if (!appId || !data) {
      return res.status(400).json({
        success: false,
        message: "appId and data are required",
      });
    }

    const app = await prisma.app.findUnique({
      where: {
        id: appId,
      },
    });

    if (!app) {
      return res.status(404).json({
        success: false,
        message: "App not found",
      });
    }

    const record = await prisma.record.create({
      data: {
        appId,
        data,
      },
    });

    res.status(201).json({
      success: true,
      message: "Record created successfully",
      record,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getRecords = async (req, res) => {
  try {
    const { appId } = req.params;

    const records = await prisma.record.findMany({
      where: {
        appId,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    res.status(200).json({
      success: true,
      records,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateRecord = async (req, res) => {
  try {
    const { recordId } = req.params;
    const { data } = req.body;

    const updatedRecord = await prisma.record.update({
      where: {
        id: recordId,
      },
      data: {
        data,
      },
    });

    res.status(200).json({
      success: true,
      message: "Record updated successfully",
      record: updatedRecord,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteRecord = async (req, res) => {
  try {
    const { recordId } = req.params;

    await prisma.record.delete({
      where: {
        id: recordId,
      },
    });

    res.status(200).json({
      success: true,
      message: "Record deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
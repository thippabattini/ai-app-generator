import prisma from "../utils/prisma.js";

export const createApp = async (req, res) => {
  try {
    const { name, description, config } = req.body;

    if (!name || !config) {
      return res.status(400).json({
        success: false,
        message: "Name and config are required",
      });
    }

    const app = await prisma.app.create({
      data: {
        name,
        description,
        config,
        userId: req.user.id,
      },
    });

    res.status(201).json({
      success: true,
      message: "App created successfully",
      app,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Failed to create app",
    });
  }
};

export const getApps = async (
  req,
  res
) => {
  try {
    const apps = [
      {
        _id: "123",

        name: "CRM Dashboard",

        description:
          "Dynamic CRM App",
      },

      {
        _id: "456",

        name: "Analytics Panel",

        description:
          "AI Business Insights",
      },
    ];

    res.status(200).json(apps);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message:
        "Failed to fetch apps",
    });
  }
};
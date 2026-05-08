import jwt from "jsonwebtoken";

const authMiddleware = (
  req,
  res,
  next
) => {
  try {
    const authHeader =
      req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({
        success: false,

        message:
          "No token provided",
      });
    }

    const token =
      authHeader.split(" ")[1];

    /* MOCK GOOGLE LOGIN SUPPORT */

    if (
      token ===
      "mock-google-token"
    ) {
      req.user = {
        id: "google-user",

        email:
          "googleuser@gmail.com",
      };

      return next();
    }

    /* NORMAL JWT LOGIN */

    const decoded =
      jwt.verify(
        token,
        process.env.JWT_SECRET
      );

    req.user = decoded;

    next();
  } catch (error) {
    return res.status(401).json({
      success: false,

      message:
        "Invalid token",
    });
  }
};

export default authMiddleware;
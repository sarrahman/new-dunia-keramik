import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const verifyToken = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({
      status: 401,
      message: "Silakan login terlebih dahulu",
    });
  }

  const token = authorization.split(" ")[1];
  if (!token) {
    return res.status(401).json({
      status: 401,
      message: "Token tidak ditemukan",
    });
  }

  jwt.verify(
    token,
    "sangatRahasia",
    { expiresIn: "1d" },
    (err, decoded) => {
      if (err) {
        return res.status(401).json({
          status: 401,
          message: "Token tidak valid atau sudah kadaluwarsa",
        });
      }
      req.user = decoded;
      next();
    }
  );
};

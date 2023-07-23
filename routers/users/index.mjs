import express from "express";
import {
  getAllUsers,
  getUser,
  daftarUser,
  masukUser,
  getCurrentUserLogin,
  keluarUser,
} from "../../controllers/users/index.mjs";
import { verifyToken } from "../../middleware/verify-token/index.mjs";

const router = express.Router();

//users
router.get("/users", getAllUsers);
router.get("/users/:slug", getUser);
router.get("/users/auth/profile", verifyToken, getCurrentUserLogin);
router.post("/users/daftar", daftarUser);
router.post("/users/masuk", masukUser);
router.delete("/users/keluar", verifyToken, keluarUser);

export { router as usersRouter };

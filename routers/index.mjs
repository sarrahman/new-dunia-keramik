import express from "express";
import { barangRouter } from "./products/index.mjs";
import { usersRouter } from "./users/index.mjs";

const router = express.Router();

router.use(barangRouter);
router.use(usersRouter);

export default router;

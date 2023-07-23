import express from "express";
import { barangRouter } from "./products/index.mjs";

const router = express.Router();

router.use(barangRouter);

export default router;

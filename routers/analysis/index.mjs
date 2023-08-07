import express from "express";
import { analysisBarang } from "../../controllers/analysis/index.mjs";

const router = express.Router();

//analysis
router.get("/analysis/barang", analysisBarang);

export { router as analysisRouter };

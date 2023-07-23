import express from "express";
import {
  getAllBarang,

  //kategori
  getAllKategoriBarang,
  getKategoriBarang,
  tambahKategoriBarang,
  hapusKategoriBarang,
  editKategoriBarang,

  //merk
  getAllMerkBarang,
  tambahMerkBarang,
  editMerkBarang,
  getMerkBarang,
  hapusMerkBarang,

  //motif
  getAllMotifBarang,
  tambahMotifBarang,
  editMotifBarang,
  getMotifBarang,
  hapusMotifBarang,
} from "../../controllers/products/index.mjs";

const router = express.Router();

router.get("/barang", getAllBarang);

//kategori-barang
router.get("/kategori-barang", getAllKategoriBarang);
router.get("/kategori-barang/:slug", getKategoriBarang);
router.post("/kategori-barang", tambahKategoriBarang);
router.patch("/kategori-barang/:slug", editKategoriBarang);
router.delete("/kategori-barang/:slug", hapusKategoriBarang);

//merk
router.get("/merk-barang", getAllMerkBarang);
router.get("/merk-barang/:slug", getMerkBarang);
router.post("/merk-barang", tambahMerkBarang);
router.patch("/merk-barang/:slug", editMerkBarang);
router.delete("/merk-barang/:slug", hapusMerkBarang);

//motif
router.get("/motif-barang", getAllMotifBarang);
router.get("/motif-barang/:slug", getMotifBarang);
router.post("/motif-barang", tambahMotifBarang);
router.patch("/motif-barang/:slug", editMotifBarang);
router.delete("/motif-barang/:slug", hapusMotifBarang);

export { router as barangRouter };

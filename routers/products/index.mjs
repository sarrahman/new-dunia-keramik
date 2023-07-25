import express from "express";
import {
  getAllBarang,
  getBarang,
  tambahBarang,
  hapusBarang,
  editBarang,
  searchByAlgolia,

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

  //tekstur
  getAllTeksturBarang,
  tambahTeksturBarang,
  editTeksturBarang,
  getTeksturBarang,
  hapusTeksturBarang,

  //ukuran
  getAllUkuranBarang,
  tambahUkuranBarang,
  editUkuranBarang,
  getUkuranBarang,
  hapusUkuranBarang,
} from "../../controllers/products/index.mjs";

const router = express.Router();

//barang
router.get("/barang", getAllBarang);
router.get("/barang/search", searchByAlgolia);
router.get("/barang/:slug", getBarang);
router.post("/barang", tambahBarang);
router.patch("/barang/:slug", editBarang);
router.delete("/barang/:slug", hapusBarang);

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

//tekstur
router.get("/tekstur-barang", getAllTeksturBarang);
router.get("/tekstur-barang/:slug", getTeksturBarang);
router.post("/tekstur-barang", tambahTeksturBarang);
router.patch("/tekstur-barang/:slug", editTeksturBarang);
router.delete("/tekstur-barang/:slug", hapusTeksturBarang);

//ukuran
router.get("/ukuran-barang", getAllUkuranBarang);
router.get("/ukuran-barang/:slug", getUkuranBarang);
router.post("/ukuran-barang", tambahUkuranBarang);
router.patch("/ukuran-barang/:slug", editUkuranBarang);
router.delete("/ukuran-barang/:slug", hapusUkuranBarang);

export { router as barangRouter };

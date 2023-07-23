import getAllBarang from "./barang/getAllData/index.mjs";

//kategori
import {
  getAllKategoriBarang,
  tambahKategoriBarang,
  getKategoriBarang,
  hapusKategoriBarang,
  editKategoriBarang,
} from "./kategori/index.mjs";

//merk
import {
  getAllMerkBarang,
  tambahMerkBarang,
  editMerkBarang,
  getMerkBarang,
  hapusMerkBarang,
} from "./merk/index.mjs";

//motif
import {
  getAllMotifBarang,
  tambahMotifBarang,
  editMotifBarang,
  getMotifBarang,
  hapusMotifBarang,
} from "./motif/index.mjs";

//tekstur
import {
  getAllTeksturBarang,
  tambahTeksturBarang,
  editTeksturBarang,
  getTeksturBarang,
  hapusTeksturBarang,
} from "./tekstur/index.mjs";

//ukuran
import {
  getAllUkuranBarang,
  tambahUkuranBarang,
  editUkuranBarang,
  getUkuranBarang,
  hapusUkuranBarang,
} from "./ukuran/index.mjs";

export {
  getAllBarang,

  //kategori barang
  getAllKategoriBarang,
  tambahKategoriBarang,
  getKategoriBarang,
  editKategoriBarang,
  hapusKategoriBarang,

  //merk
  getAllMerkBarang,
  tambahMerkBarang,
  editMerkBarang,
  getMerkBarang,
  hapusMerkBarang,

  // motif
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
};

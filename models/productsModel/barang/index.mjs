import mongoose from "mongoose";

const barang = mongoose.Schema({
  kode_barang: {
    type: String,
    required: true,
  },
  nama_barang: {
    type: String,
    required: true,
  },
  slug: {
    type: String, // diambil dari kode_barang
    required: true,
  },
  id_kategori: {
    type: String,
    required: true,
  },
  id_merk: {
    type: String,
    required: true,
  },
  id_ukuran: {
    type: String,
    required: true,
  },
  id_motif: {
    type: String,
    required: true,
  },
  id_tekstur: {
    type: String,
    required: true,
  },
  kualitas: {
    type: String,
  },
  stok: {
    type: Number,
    required: true,
  },
  harga: {
    type: Number,
    required: true,
  },
  images: {
    type: Array,
    required: true,
  },
  createdAt: {
    type: Number,
    default: Date.now(),
  },
  updatedAt: {
    type: Number,
    default: Date.now(),
  },
});

export default mongoose.model("barang", barang);

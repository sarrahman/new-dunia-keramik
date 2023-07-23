import mongoose from "mongoose";

const kategori_barang = mongoose.Schema({
  nama_kategori_barang: {
    type: String,
    required: true,
  },
  slug: {
    type: String, // diambil dari nama
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

export default mongoose.model("kategori_barang", kategori_barang);

import mongoose from "mongoose";

const ukuran = mongoose.Schema({
  nama_ukuran: {
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

export default mongoose.model("ukuran", ukuran);

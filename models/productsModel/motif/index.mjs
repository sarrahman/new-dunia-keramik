import mongoose from "mongoose";

const motif = mongoose.Schema({
  nama_motif: {
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

export default mongoose.model("motif", motif);

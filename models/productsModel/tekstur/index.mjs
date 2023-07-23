import mongoose from "mongoose";

const tekstur = mongoose.Schema({
  nama_tekstur: {
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

export default mongoose.model("tekstur", tekstur);

import mongoose from "mongoose";

const users = mongoose.Schema({
  nama: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  slug: {
    type: String, // diambil dari username
    required: true,
  },
  password: {
    type: String,
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

export default mongoose.model("users", users);

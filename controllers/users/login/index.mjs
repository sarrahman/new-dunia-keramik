import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import firestore from "../../../config/firestore.mjs";

dotenv.config();

// login user
const masukUser = async (req, res) => {
  const { username, password } = req.body;

  // Validasi input
  if (!username || !password) {
    return res.status(400).json({
      status: 400,
      success: false,
      message: "Data tidak lengkap",
      error: {
        fields: {
          username: !username ? "Username harus diisi" : "",
          password: !password ? "Password harus diisi" : "",
        },
      },
    });
  }

  try {
    // Cek apakah username sudah ada
    const snapshot = await firestore
      .collection("users")
      .where("username", "==", username)
      .limit(1)
      .get();

    // Pengecekan username
    if (snapshot.empty) {
      return res.status(404).json({
        status: 404,
        success: false,
        message: "User Belum terdaftar",
      });
    }

    const user = snapshot.docs[0].data();

    // Cek apakah password sesuai dengan password di server
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({
        status: 401,
        success: false,
        message: "Password salah",
        error: {
          fields: {
            password: "Password salah",
          },
        },
      });
    }

    // Login berhasil, buat token jwt dan refresh token
    const payload = {
      nama: user.nama,
      username: user.username,
    };
    const token = jwt.sign(payload, "sangatRahasia", {
      expiresIn: "7d",
    });

    res.cookie("tx", token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 7,
    });

    return res.status(200).json({
      status: 200,
      success: true,
      message: "Login Berhasil",
      data: {
        token,
        user: payload,
      },
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      success: false,
      message: "Login Gagal",
      error,
    });
  }
};

export default masukUser;

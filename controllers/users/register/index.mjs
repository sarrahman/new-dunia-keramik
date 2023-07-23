import bcrypt from "bcrypt";
import firestore from "../../../config/firestore.mjs";

// pendaftaran user baru
const daftarUser = async (req, res) => {
  const { nama, username, password } = req.body;

  // Validasi input
  if (!nama || !username || !password) {
    return res.status(400).json({
      status: 400,
      success: false,
      message: "Data tidak lengkap",
      error: {
        fields: {
          nama: !nama ? "Nama harus diisi" : "",
          username: !username ? "Username harus diisi" : "",
          password: !password ? "Password harus diisi" : "",
        },
      },
    });
  }

  // Memformat string ke slug
  const stringToSlug = (str) => {
    return str
      .trim()
      .toLowerCase()
      .replace(/[\W_]+/g, "-")
      .replace(/^-+|-+$/g, "");
  };

  const newUsername = stringToSlug(username);

  try {
    // Cek apakah username sudah ada
    const snapshot = await firestore
      .collection("users")
      .where("username", "==", newUsername)
      .limit(1)
      .get();

    // Pengecekan username
    if (snapshot.size !== 0) {
      return res.status(404).json({
        status: 404,
        success: false,
        message: "User sudah terdaftar",
      });
    }

    // Enkripsi password
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = {
      nama,
      username: newUsername,
      password: hashedPassword,
    };

    await firestore.collection("users").add(user);

    return res.status(200).json({
      status: 200,
      success: true,
      message: "Pendaftaran berhasil",
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      success: false,
      message: "Terjadi kesalahan server",
      error,
    });
  }
};

export default daftarUser;

import firestore from "../../../config/firestore.mjs";

// mengambil profil user yang sedang login
const getCurrentUserLogin = async (req, res) => {
  try {
    const clientIp = req.clientIp;
    // Cek apakah username sudah ada
    const snapshot = await firestore
      .collection("users")
      .where("username", "==", req.user.username)
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

    return res.status(200).json({
      status: 200,
      success: true,
      message: "Data user ditemukan",
      data: user,
      ip: clientIp,
    });
  } catch (error) {
    return res.status(error.response.status).json({
      status: error.response.status,
      success: false,
      message: error.response.data.message || "Terjadi kesalahan server",
    });
  }
};

export default getCurrentUserLogin;

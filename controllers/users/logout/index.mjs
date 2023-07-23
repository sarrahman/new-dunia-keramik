// user logout
const keluarUser = async (req, res) => {
  try {
    // Hapus token dari cookies
    res.clearCookie("tx");

    return res.status(200).json({
      status: 200,
      success: true,
      message: "Logout berhasil",
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      success: false,
      message: "Terjadi kesalahan server",
    });
  }
};

export default keluarUser;

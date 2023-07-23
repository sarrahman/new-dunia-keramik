import { tambahDataFirestore } from "../../../../functions/index.mjs";

const tambahTeksturBarang = async (req, res) => {
  const { nama_tekstur } = req.body;

  // Validasi input
  if (!nama_tekstur) {
    return res.status(400).json({
      status: 400,
      error: {
        status: 400,
        success: false,
        message: "Data tidak lengkap!",
        error: {
          fields: {
            nama_tekstur: !nama_tekstur ? "Nama Tekstur harus diisi" : "",
          },
        },
      },
    });
  }

  try {
    const data = await tambahDataFirestore("tekstur-barang", {
      nama: nama_tekstur,
    });

    res.status(201).json({
      status: 201,
      success: true,
      message: "Berhasil menambahkan data",
      data,
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      success: false,
      message: "terjadi Kesalahan",
      error,
    });
  }
};

export default tambahTeksturBarang;

import { tambahDataFirestore } from "../../../../functions/index.mjs";

const tambahMerkBarang = async (req, res) => {
  const { nama } = req.body;

  // Validasi input
  if (!nama) {
    return res.status(400).json({
      status: 400,
      error: {
        status: 400,
        success: false,
        message: "Data tidak lengkap!",
        error: {
          fields: {
            nama: !nama ? "Nama merk harus diisi" : "",
          },
        },
      },
    });
  }

  try {
    const data = await tambahDataFirestore("merk-barang", { nama });

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

export default tambahMerkBarang;

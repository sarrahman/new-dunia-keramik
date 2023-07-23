import { tambahDataFirestore } from "../../../../functions/index.mjs";

const tambahMotifBarang = async (req, res) => {
  const { nama_motif } = req.body;

  // Validasi input
  if (!nama_motif) {
    return res.status(400).json({
      status: 400,
      error: {
        status: 400,
        success: false,
        message: "Data tidak lengkap!",
        error: {
          fields: {
            nama_motif: !nama_motif ? "Nama motif harus diisi" : "",
          },
        },
      },
    });
  }

  try {
    const data = await tambahDataFirestore("motif-barang", {
      nama: nama_motif,
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

export default tambahMotifBarang;

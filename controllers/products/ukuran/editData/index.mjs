import { editDataFirestore } from "../../../../functions/index.mjs";

const editUkuranBarang = async (req, res) => {
  const { nama_ukuran } = req.body;
  const { slug } = req.params;

  // Validasi input
  if (!nama_ukuran) {
    return res.status(400).json({
      status: 400,
      error: {
        status: 400,
        success: false,
        message: "Data tidak lengkap!",
        error: {
          fields: {
            nama_ukuran: !nama_ukuran ? "Nama Ukuran harus diisi" : "",
          },
        },
      },
    });
  }

  try {
    const data = await editDataFirestore("ukuran-barang", slug, {
      nama: nama_ukuran,
    });

    res.status(201).json({
      status: 201,
      success: true,
      message: "Berhasil mengedit data",
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

export default editUkuranBarang;

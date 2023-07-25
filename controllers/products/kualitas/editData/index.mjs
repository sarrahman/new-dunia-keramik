import { editDataFirestore } from "../../../../functions/index.mjs";

const editKualitasBarang = async (req, res) => {
  const { nama } = req.body;
  const { slug } = req.params;

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
            nama: !nama ? "Nama Kualitas harus diisi" : "",
          },
        },
      },
    });
  }

  try {
    const data = await editDataFirestore("kualitas-barang", slug, {
      nama,
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

export default editKualitasBarang;

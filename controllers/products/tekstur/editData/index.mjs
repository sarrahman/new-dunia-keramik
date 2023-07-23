import { editDataFirestore } from "../../../../functions/index.mjs";

const editTeksturBarang = async (req, res) => {
  const { nama_tekstur } = req.body;
  const { slug } = req.params;

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
    const data = await editDataFirestore("tekstur-barang", slug, {
      nama: nama_tekstur,
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

export default editTeksturBarang;

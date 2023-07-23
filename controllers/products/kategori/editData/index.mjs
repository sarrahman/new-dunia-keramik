import { editDataFirestore } from "../../../../functions/index.mjs";

const editKategoriBarang = async (req, res) => {
  const { nama_kategori_barang } = req.body;
  const { slug } = req.params;

  // Validasi input
  if (!nama_kategori_barang) {
    return res.status(400).json({
      status: 400,
      error: {
        status: 400,
        success: false,
        message: "Data tidak lengkap!",
        error: {
          fields: {
            nama_kategori_barang: !nama_kategori_barang
              ? "Nama Kategori harus diisi"
              : "",
          },
        },
      },
    });
  }

  try {
    const data = await editDataFirestore("kategori-barang", slug, {
      nama: nama_kategori_barang,
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

export default editKategoriBarang;

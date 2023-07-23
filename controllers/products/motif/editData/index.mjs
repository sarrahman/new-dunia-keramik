import { editDataFirestore } from "../../../../functions/index.mjs";

const editMotifBarang = async (req, res) => {
  const { nama_motif } = req.body;
  const { slug } = req.params;

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
            nama_motif: !nama_motif ? "Nama Motif harus diisi" : "",
          },
        },
      },
    });
  }

  try {
    const data = await editDataFirestore("motif-barang", slug, {
      nama: nama_motif,
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

export default editMotifBarang;

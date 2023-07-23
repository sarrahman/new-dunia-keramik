import { hapusDataFirestore } from "../../../../functions/index.mjs";

export const hapusKategoriBarang = async (req, res) => {
  const { slug } = req.params;

  try {
    const data = await hapusDataFirestore("kategori-barang", slug);

    res.status(200).json({
      status: 200,
      success: true,
      message: "Berhasil Menghapus Data",
      data,
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      success: false,
      message: "Gagal Menghapus Data",
      error,
    });
  }
};

export default hapusKategoriBarang;

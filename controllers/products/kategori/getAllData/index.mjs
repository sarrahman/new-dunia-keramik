import { getAllDataFirestore } from "../../../../functions/index.mjs";

// Mengambil data barang
const getAllKategoriBarang = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 25;

  try {
    const { totalPages, totalData, data } = await getAllDataFirestore(
      "kategori-barang",
      page,
      limit
    );

    res.status(200).json({
      status: 200,
      success: true,
      message: "Berhasil Mengambil Data Kategori Barang",
      data,
      metadata: {
        page,
        limit,
        totalData,
        totalPages,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      success: false,
      message: "Gagal Mengambil Data",
      error,
    });
  }
};

export default getAllKategoriBarang;

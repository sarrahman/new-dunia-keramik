import { getAllDataFirestore } from "../../../../functions/getAllDataFirestore/index.mjs";

const getAllBarang = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 25;
  const motif = req.query.motif || null;
  const merk = req.query.merk || null;
  const ukuran = req.query.ukuran || null;
  const tekstur = req.query.tekstur || null;

  try {
    // Mengambil data barang dengan atau tanpa filter berdasarkan motif
    const { totalPages, totalData, data } = await getAllDataFirestore(
      "barang",
      page,
      limit,
      motif,
      merk,
      ukuran,
      tekstur
    );

    res.status(200).json({
      status: 200,
      success: true,
      message: "Berhasil Mengambil Data Barang",
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
      message: "Gagal Mengambil Data Barang",
      error,
    });
  }
};

export default getAllBarang;

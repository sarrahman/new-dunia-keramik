import { getDataFirestore } from "../../../../functions/index.mjs";

export const getMerkBarang = async (req, res) => {
  const { slug } = req.params;

  try {
    const data = await getDataFirestore("merk-barang", slug);

    res.status(200).json({
      status: 200,
      success: true,
      message: "Berhasil Mengambil Data",
      data,
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

export default getMerkBarang;

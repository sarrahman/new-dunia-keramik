import algoliaIndex from "../../../../config/algolia.mjs";
import { hapusDataFirestore } from "../../../../functions/index.mjs";

export const hapusBarang = async (req, res) => {
  const { slug } = req.params;

  try {
    const data = await hapusDataFirestore("barang", slug);

    // Hapus data pada Algolia
    await algoliaIndex.deleteObject(slug);

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

export default hapusBarang;

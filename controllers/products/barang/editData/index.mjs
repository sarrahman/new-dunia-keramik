import algoliaIndex from "../../../../config/algolia.mjs";
import firestore from "../../../../config/firestore.mjs";

export const editBarang = async (req, res) => {
  const { nama_barang, stok, harga, images } = req.body;
  const { slug } = req.params;

  // Validasi input
  if (!nama_barang || !stok || !harga || !images) {
    return res.status(400).json({
      status: 400,
      error: {
        status: 400,
        success: false,
        message: "Data tidak lengkap!",
        error: {
          fields: {
            nama_barang: !nama_barang ? "Nama barang harus diisi" : "",
            stok: !stok ? "Stok barang harus diisi" : "",
            harga: !harga ? "Harga barang harus diisi" : "",
            images: !images ? "Gambar barang harus ada" : "",
          },
        },
      },
    });
  }

  try {
    // Pengecekan apakah data dengan slug yang sama sudah ada
    const dataRef = firestore.collection("barang").doc(slug);
    const dataSnapshot = await dataRef.get();

    if (!dataSnapshot.exists) {
      return res.status(404).json({
        status: 404,
        success: false,
        message: "Data tidak ditemukan",
      });
    }

    const data = dataSnapshot.data();

    const newData = {
      ...req.body,
      slug,
      kode_barang: data.kode_barang,
      updatedAt: Date.now(),
    };

    const newDataAlgolia = {
      ...req.body,
      slug,
      images: "",
      kode_barang: data.kode_barang,
      updatedAt: Date.now(),
    };

    await firestore.collection("barang").doc(slug).update(newData);

    // Update data pada Algolia
    await algoliaIndex.saveObject(newDataAlgolia);

    res.status(200).json({
      status: 200,
      success: true,
      message: "Berhasil mengedit data",
      data: newData,
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      success: false,
      message: "Terjadi Kesalahan",
      error,
    });
  }
};

export default editBarang;

import algoliaIndex from "../../../../config/algolia.mjs";
import AWS from "../../../../config/amazon.mjs";
import firestore from "../../../../config/firestore.mjs";

export const hapusBarang = async (req, res) => {
  const { slug } = req.params;

  try {
    const snapshot = await firestore
      .collection("barang")
      .where("slug", "==", slug)
      .limit(1)
      .get();

    // Pengecekan barang
    if (snapshot.empty) {
      return res.status(404).json({
        status: 404,
        success: false,
        message: "Data Tidak Ditemukan",
      });
    }

    const doc = snapshot.docs[0];
    const data = doc.data();

    // Hapus data pada Firestore
    await firestore.collection("barang").doc(data.slug).delete();

    // Hapus data pada Algolia
    await algoliaIndex.deleteObject(data.slug);

    const kode_barang = data.kode_barang;

    // Hapus gambar-gambar dari S3 Bucket
    const s3 = new AWS.S3();
    const deletePromises = [];
    for (let i = 0; i < data.images.length; i++) {
      const fileName = `${kode_barang}-${i}`;
      const params = {
        Bucket: "dunia-keramik",
        Key: fileName,
      };
      deletePromises.push(s3.deleteObject(params).promise());
    }
    await Promise.all(deletePromises);

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

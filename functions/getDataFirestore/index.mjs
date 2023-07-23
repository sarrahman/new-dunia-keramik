import firestore from "../../config/firestore.mjs";

export async function getDataFirestore(namaCollection, slug) {
  const snapshot = await firestore
    .collection(namaCollection)
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

  const newData = {
    id: doc.id,
    ...data,
  };

  return newData;
}

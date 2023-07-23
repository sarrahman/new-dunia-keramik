import firestore from "../../config/firestore.mjs";

export async function editDataFirestore(namaCollection, slug, data) {
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
      message: "Data barang tidak ditemukan",
    });
  }

  const doc = snapshot.docs[0];
  const currentData = doc.data();

  const dataUpdate = {
    ...currentData,
    ...data,
    updatedAt: Date.now(),
  };

  await firestore.collection(namaCollection).doc(slug).update(dataUpdate);

  return dataUpdate;
}

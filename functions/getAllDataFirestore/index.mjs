import firestore from "../../config/firestore.mjs";

export async function getAllDataFirestore(
  namaCollection,
  page,
  limit,
  motif,
  merk,
  ukuran
) {
  let query = firestore.collection(namaCollection);

  if (motif && ukuran) {
    query = query.where("motif", "==", motif).where("ukuran", "==", ukuran);
  } else if (motif) {
    query = query.where("motif", "==", motif);
  } else if (merk) {
    query = query.where("merk", "==", merk);
  } else if (ukuran) {
    query = query.where("ukuran", "==", ukuran);
  }

  const snapshot = await query
    .offset((page - 1) * limit)
    .limit(limit)
    .get();

  const dataArray = [];
  snapshot.forEach((doc) => {
    const docData = doc.data();
    dataArray.push({
      id: doc.id,
      ...docData,
    });
  });

  const totalData = (await firestore.collection(namaCollection).get()).size;
  const totalPages = Math.ceil(totalData / limit);

  return {
    totalPages,
    totalData,
    data: dataArray,
  };
}

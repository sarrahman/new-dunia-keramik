import firestore from "../../config/firestore.mjs";

export async function getAllDataFirestore(namaCollection, page, limit, motif) {
  let query = firestore.collection(namaCollection);

  // Jika motif diberikan, tambahkan filter berdasarkan motif
  if (motif) {
    query = query.where("motif", "==", motif);
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

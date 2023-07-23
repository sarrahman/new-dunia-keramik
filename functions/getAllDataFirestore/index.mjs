import firestore from "../../config/firestore.mjs";

export async function getAllDataFirestore(namaCollection, page, limit) {
  let query = firestore.collection(namaCollection);

  const snapshot = await query
    .offset((page - 1) * limit)
    .limit(limit)
    .get();

  const dataArray = []; // Ganti variabel 'data' menjadi 'dataArray'
  snapshot.forEach((doc) => {
    const docData = doc.data(); // Ganti variabel 'data' menjadi 'docData'
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
    data: dataArray, // Ganti variabel 'data' menjadi 'dataArray'
  };
}

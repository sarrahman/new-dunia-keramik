import firestore from "../../config/firestore.mjs";

export async function getAllDataFirestore(
  namaCollection,
  page,
  limit,
  motif,
  merk,
  ukuran,
  tekstur
) {
  let query = firestore.collection(namaCollection);

  if (motif && ukuran && tekstur) {
    query = query
      .where("motif", "==", motif)
      .where("ukuran", "==", ukuran)
      .where("tekstur", "==", tekstur);
    console.log(1);
  } else if (motif && ukuran) {
    query = query.where("motif", "==", motif).where("ukuran", "==", ukuran);
    console.log(2);
  } else if (motif) {
    query = query.where("motif", "==", motif);
    console.log(3);
  } else if (merk) {
    query = query.where("merk", "==", merk);
    console.log(4);
  } else if (ukuran) {
    query = query.where("ukuran", "==", ukuran);
    console.log(5);
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

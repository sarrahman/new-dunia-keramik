import firestore from "../../config/firestore.mjs";

export async function tambahDataFirestore(namaCollection, data) {
  // Memformat string ke slug
  const stringToSlug = (str) => {
    return str
      .trim()
      .toLowerCase()
      .replace(/[\W_]+/g, "-")
      .replace(/^-+|-+$/g, "");
  };

  const slug = stringToSlug(data.nama);

  // Pengecekan data berdasarkan slug
  const dataRef = firestore.collection(namaCollection).doc(slug);
  const dataSnapshot = await dataRef.get();

  // Pengecekan apakah data dengan slug yang sama sudah ada
  if (dataSnapshot.exists) {
    return {
      status: 409,
      success: false,
      message: "Data tersebut sudah ada",
    };
  }

  const newData = {
    ...data,
    slug,
    createdAt: Date.now(),
    updatedAt: Date.now(),
  };

  await dataRef.set(newData);

  return newData;
}

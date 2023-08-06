import firestore from "../../../../config/firestore.mjs";

const getAllNewBarang = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 25;
  const motif = req.query.motif || null;
  const merk = req.query.merk || null;
  const ukuran = req.query.ukuran || null;
  const tekstur = req.query.tekstur || null;

  try {
    let query = firestore.collection("barang");

    if (motif && ukuran && tekstur) {
      query = query
        .where("motif", "==", motif)
        .where("ukuran", "==", ukuran)
        .where("tekstur", "==", tekstur);
    } else if (motif && ukuran) {
      query = query.where("motif", "==", motif).where("ukuran", "==", ukuran);
    } else if (motif) {
      query = query.where("motif", "==", motif);
    } else if (merk) {
      query = query.where("merk", "==", merk);
    } else if (ukuran) {
      query = query.where("ukuran", "==", ukuran);
    }

    // Urutkan berdasarkan createdAt secara descending (dari yang terbaru)
    query = query.orderBy("createdAt", "desc");

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

    const totalData = (await firestore.collection("barang").get()).size;
    const totalPages = Math.ceil(totalData / limit);
    res.status(200).json({
      status: 200,
      success: true,
      message: "Berhasil Mengambil Data Barang",
      data: dataArray,
      metadata: {
        page,
        limit,
        totalData,
        totalPages,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      success: false,
      message: "Gagal Mengambil Data Barang",
      error,
    });
  }
};

export default getAllNewBarang;

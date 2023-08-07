import firestore from "../../../config/firestore.mjs";

const groupByCriteria = (data) => {
  const groupedData = {};

  data.forEach((barang) => {
    const key = `${barang.kategori}-${barang.motif}-${barang.tekstur}-${barang.ukuran}`;
    if (!groupedData[key]) {
      groupedData[key] = [];
    }
    groupedData[key].push(barang);
  });

  return groupedData;
};

const analyzeHarga = (groupedData) => {
  const hargaAnalysis = {};

  for (const key in groupedData) {
    const group = groupedData[key];
    const hargaArr = group.map((barang) => parseInt(barang.harga));

    hargaAnalysis[key] = {
      hargaRataRata:
        hargaArr.reduce((acc, curr) => acc + curr, 0) / hargaArr.length,
      hargaTertinggi: Math.max(...hargaArr),
      hargaTerendah: Math.min(...hargaArr),
    };
  }

  return hargaAnalysis;
};

const analyzeStok = (groupedData) => {
  const stokAnalysis = {};

  for (const key in groupedData) {
    const group = groupedData[key];
    const totalStok = group.reduce(
      (acc, barang) => acc + parseInt(barang.stok),
      0
    );

    stokAnalysis[key] = {
      totalStok,
    };
  }

  return stokAnalysis;
};

const analysisBarang = async (req, res) => {
  try {
    // Mengambil data barang dari Firestore
    let query = firestore.collection("barang");

    const snapshot = await query.get();

    const data = [];
    snapshot.forEach((doc) => {
      const docData = doc.data();
      data.push({
        id: doc.id,
        ...docData,
      });
    });

    // Kelompokkan data barang berdasarkan kategori, motif, tekstur, dan ukuran yang sama
    const groupedData = groupByCriteria(data);

    // Analisis harga
    const hargaAnalysis = analyzeHarga(groupedData);

    // Analisis stok
    const stokAnalysis = analyzeStok(groupedData);

    res.status(200).json({
      status: 200,
      success: true,
      message: "Analisis Stok dan Harga Berhasil",
      hargaAnalysis,
      stokAnalysis,
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      success: false,
      message: "Gagal Melakukan Analisis Stok dan Harga",
      error,
    });
  }
};

export default analysisBarang;

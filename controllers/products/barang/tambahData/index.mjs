import algoliaIndex from "../../../../config/algolia.mjs";
import AWS from "../../../../config/amazon.mjs";
import firestore from "../../../../config/firestore.mjs";
import { generateKodeBarang } from "../../../../functions/index.mjs";

export const tambahBarang = async (req, res) => {
  const { nama_barang, kategori, merk, stok, harga, images } = req.body;

  // Validasi input
  if (!nama_barang || !stok || !harga || !images) {
    return res.status(400).json({
      status: 400,
      error: {
        status: 400,
        success: false,
        message: "Data tidak lengkap!",
        error: {
          fields: {
            nama_barang: !nama_barang ? "Nama barang harus diisi" : "",
            stok: !stok ? "stok barang harus diisi" : "",
            harga: !harga ? "harga barang harus diisi" : "",
            images: !images ? "gambar barang harus ada" : "",
          },
        },
      },
    });
  }

  try {
    // Memformat string ke slug
    const stringToSlug = (str) => {
      return str
        .trim()
        .toLowerCase()
        .replace(/[\W_]+/g, "-")
        .replace(/^-+|-+$/g, "");
    };

    const kode_barang = generateKodeBarang(kategori, merk, nama_barang);
    const slug = stringToSlug(kode_barang);

    // Pengecekan data berdasarkan slug
    const dataRef = firestore.collection("barang").doc(slug);
    const dataSnapshot = await dataRef.get();

    // Pengecekan apakah data dengan slug yang sama sudah ada
    if (dataSnapshot.exists) {
      return {
        status: 409,
        success: false,
        message: "Data tersebut sudah ada",
      };
    }

    // simpan gambar ke S3
    const s3 = new AWS.S3();

    const uploadPromises = images.map(async (image, i) => {
      const base64Data = image.replace(/^data:image\/\w+;base64,/, "");
      const buffer = Buffer.from(base64Data, "base64");
      const fileName = `${kode_barang}-${i}`;

      const params = {
        Bucket: "dunia-keramik",
        Key: fileName,
        Body: buffer,
        ContentEncoding: "base64",
        ContentType: "image/jpeg",
      };

      return s3.upload(params).promise();
    });

    const uploadResponses = await Promise.all(uploadPromises);
    const imageUrls = uploadResponses.map((response) => response.Location);

    const newData = {
      objectID: slug, // Tambahkan objectID yang unik untuk algolia
      ...req.body,
      images: imageUrls,
      kode_barang,
      slug,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };

    await dataRef.set(newData);

    // Menambahkan data ke indeks Algolia
    await algoliaIndex.saveObject(newData);

    res.status(201).json({
      status: 201,
      success: true,
      message: "Berhasil menambahkan data",
      data: newData,
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      success: false,
      message: "terjadi Kesalahan",
      error,
    });
  }
};

export default tambahBarang;

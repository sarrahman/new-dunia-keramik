export const generateKodeBarang = (
  nama_kategori_barang,
  nama_brand,
  nama_barang
) => {
  try {
    const singkatanKategori = nama_kategori_barang
      .substring(0, 2)
      .toUpperCase();

    const singkatanBrand = nama_brand.substring(0, 2).toUpperCase();

    const singkatanNamaBarang = nama_barang.substring(0, 2).toUpperCase();

    // Generate angka acak antara 100 dan 999
    const angkaAcak = Math.floor(Math.random() * (999 - 100 + 1)) + 100;

    // Gabungkan semua komponen menjadi kode barang
    const kode_barang = `${singkatanKategori}${singkatanBrand}${singkatanNamaBarang}${angkaAcak}`;

    return kode_barang;
  } catch (error) {
    throw new Error("Terjadi kesalahan saat menghasilkan kode barang.");
  }
};

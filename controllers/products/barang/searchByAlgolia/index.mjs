import algoliaIndex from "../../../../config/algolia.mjs";

const searchByAlgolia = async (req, res) => {
  const { query } = req.query;

  // Validasi input
  if (!query) {
    return res.status(400).json({
      status: 400,
      success: false,
      message: "text pencarian kosong",
    });
  }

  try {
    // mengambil data berdasarkan query pencarian
    const searchResult = await algoliaIndex.search(query);

    res.status(200).json({
      status: 200,
      success: true,
      message: "Hasil pencarian",
      data: searchResult.hits,
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      success: false,
      message: "Terjadi kesalahan saat melakukan pencarian",
      error,
    });
  }
};

export default searchByAlgolia;
import algoliasearch from "algoliasearch";

const client = algoliasearch("Y4CKWHX4EX", "60af7d7b35b4f6a68fdfa36b20179abd");
const algoliaIndex = client.initIndex("barang");

export default algoliaIndex;
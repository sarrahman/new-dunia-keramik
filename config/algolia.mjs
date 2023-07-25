import algoliasearch from "algoliasearch";
import dotenv from "dotenv";

dotenv.config();

const client = algoliasearch("Y4CKWHX4EX", process.env.ALGOLIA_SECRET_KEY);
const algoliaIndex = client.initIndex("barang");

export default algoliaIndex;

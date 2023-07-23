import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { Firestore } from "@google-cloud/firestore";

// Dapatkan path ke file "firestore-key.json" berdasarkan path file saat ini
const currentFilePath = fileURLToPath(import.meta.url);
const keyFilePath = path.resolve(path.dirname(currentFilePath), "../key/firestore-key.json");

// Baca konten file JSON
const keyFileContent = JSON.parse(fs.readFileSync(keyFilePath));

// Inisialisasi Firestore
const firestore = new Firestore({
  projectId: "dunia-keramik-smd",
  credentials: {
    client_email: keyFileContent.client_email,
    private_key: keyFileContent.private_key,
  },
});

export default firestore;



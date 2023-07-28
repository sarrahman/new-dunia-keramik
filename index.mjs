import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import router from "./routers/index.mjs";

const app = express();
const port = process.env.PORT || 5000;

app.use(
  cors({
    origin: [
      "https://dashboard-dunia-keramik.netlify.app",
      "https://dunia-keramik.netlify.app",
      "https://duniakeramik.com",
      "http://localhost:3002",
      "http://localhost:3000",
    ],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json({ limit: "10mb" }));
app.use(router);

process.on("unhandledRejection", (reason, promise) => {
  console.log("Unhandled Rejection at:", reason.stack || reason);
  // Recommended: send the information to sentry.io
});

app.listen(port, () =>
  console.log(`backend dunia keramik running on port ${port}`)
);

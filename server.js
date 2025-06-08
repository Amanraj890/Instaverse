const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/auth");
const postRoutes = require("./routes/posts");

dotenv.config();
const app = express();
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);

mongoose.connect(process.env.MONGO_URI, () => {
  console.log("MongoDB Connected");
  app.listen(process.env.PORT || 5000, () => console.log("Server started"));
});
require("dotenv").config();
const path = require("path");
const express = require("express");
// const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const authRouter = require("./routes/auth/auth-routes");

const adminProductsRouter = require("./routes/admin/products-routes");
const adminOrderRouter = require("./routes/admin/order-routes");

const shopProductsRouter = require("./routes/shop/products-routes");
const shopCartRouter = require("./routes/shop/cart-routes");
const shopAddressRouter = require("./routes/shop/address-routes");
const shopOrderRouter = require("./routes/shop/order-routes");
const shopSearchRouter = require("./routes/shop/search-routes");
const shopReviewRouter = require("./routes/shop/review-routes");
const connectToMongoDB = require("./helpers/connectToMongoDB");

// mongoose
//   .connect(process.env.MONGO_DB_URI)
//   // .connect(
//   //   "mongodb+srv://jose-ambrosio:KUdtFQDBm37sDUwN@jose-ambrosio.ke25r.mongodb.net/"
//   // )
//   .then(() => console.log("MongoDB connected"))
//   .catch((error) => console.log);

const app = express();
const PORT = process.env.PORT || 5000;

// const __dirname = path.resolve();

app.use(
  cors({
    // origin: "http://localhost:3000",
    origin: "https://e-commerce-web-app-q0k6.onrender.com",
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  })
);

// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });

app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authRouter);

app.use("/api/admin/products", adminProductsRouter);
app.use("/api/admin/order", adminOrderRouter);

app.use("/api/shop/products", shopProductsRouter);
app.use("/api/shop/cart", shopCartRouter);
app.use("/api/shop/address", shopAddressRouter);
app.use("/api/shop/order", shopOrderRouter);
app.use("/api/shop/search", shopSearchRouter);
app.use("/api/shop/review", shopReviewRouter);

app.use(express.static(path.join(__dirname, "../client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

// app.listen(PORT, () => console.log(`Server is now running on port ${PORT}`));

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server is now running on port ${PORT}`);
});

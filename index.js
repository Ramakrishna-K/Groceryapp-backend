// import express from "express";
// import cors from "cors";
// import cookieParser from "cookie-parser";
// import dotenv from "dotenv";
// import { connectDB } from "./config/connectDB.js";
// dotenv.config();
// import userRoutes from "./routes/user.routes.js";
// import sellerRoutes from "./routes/seller.routes.js";
// import productRoutes from "./routes/product.routes.js";
// import cartRoutes from "./routes/cart.routes.js";
// import addressRoutes from "./routes/address.routes.js";
// import orderRoutes from "./routes/order.routes.js";

// import { connectCloudinary } from "./config/cloudinary.js";

// const app = express();

// await connectCloudinary();
// // allow multiple origins


// // src/server.js or index.js
// const allowedOrigins = [
//   "https://groceryapp-frontend-yxdr.vercel.app",
//   "http://localhost:5173"
// ];



// app.use(
//   cors({
//     origin: (origin, callback) => {
//       // allow requests with no origin (like Postman)
//       if (!origin) return callback(null, true);
//       if (allowedOrigins.includes(origin)) return callback(null, true);
//       callback(new Error("Not allowed by CORS"));
//     },
//     credentials: true, // allow cookies
//   })
// );

// //middlewares
// app.use(cors({ origin: allowedOrigins, credentials: true }));
// app.use(cookieParser());
// app.use(express.json());

// // Api endpoints
// app.use("/images", express.static("uploads"));
// app.use("/api/user", userRoutes);
// app.use("/api/seller", sellerRoutes);
// app.use("/api/product", productRoutes);
// app.use("/api/cart", cartRoutes);
// app.use("/api/address", addressRoutes);
// app.use("/api/order", orderRoutes);
// app.use("/api/seller", sellerRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   connectDB();
//   console.log(`Server is running on port ${PORT}`);
// });




import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { connectDB } from "./config/connectDB.js";
dotenv.config();
// import userRoutes from "./routes/user.routes.js";
import userRoutes from "../routes/user.routes.js";
import sellerRoutes from "./routes/seller.routes.js";
import productRoutes from "./routes/product.routes.js";
import cartRoutes from "./routes/cart.routes.js";
import addressRoutes from "./routes/address.routes.js";
import orderRoutes from "./routes/order.routes.js";

import { connectCloudinary } from "./config/cloudinary.js";

const app = express();

await connectCloudinary();

// Allowed origins for CORS
const allowedOrigins = [
  "https://groceryapp-frontend-yxdr.vercel.app",
  "http://localhost:5173"
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true); // allow Postman, etc
      if (allowedOrigins.includes(origin)) return callback(null, true);
      callback(new Error("Not allowed by CORS"));
    },
    credentials: true, // allow cookies
  })
);

// Middlewares
app.use(cors({ origin: allowedOrigins, credentials: true }));
app.use(cookieParser());
app.use(express.json());

// API endpoints
app.use("/images", express.static("uploads"));
app.use("/api/user", userRoutes);
app.use("/api/seller", sellerRoutes);
app.use("/api/product", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/address", addressRoutes);
app.use("/api/order", orderRoutes);

// ✅ Root route
app.get("/", (req, res) => {
  res.send("API is running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}`);
});































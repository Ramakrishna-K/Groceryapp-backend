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





// import express from "express";
// import cors from "cors";
// import cookieParser from "cookie-parser";
// import dotenv from "dotenv";

// import { connectDB } from "./config/connectDB.js";
// import { connectCloudinary } from "./config/cloudinary.js";

// import userRoutes from "./routes/user.routes.js";
// import sellerRoutes from "./routes/seller.routes.js";
// import productRoutes from "./routes/product.routes.js";
// import cartRoutes from "./routes/cart.routes.js";
// import addressRoutes from "./routes/address.routes.js";
// import orderRoutes from "./routes/order.routes.js";

// dotenv.config();

// const app = express();
// app.set('trust proxy', 1);
// await connectCloudinary();

// // const allowedOrigins = [
// //   "https://groceryapp-frontend-yxdr.vercel.app",
// //   "http://localhost:5173",
// // ];

// // app.use(
// //   cors({
// //     origin: (origin, callback) => {
// //       if (!origin) return callback(null, true);
// //       if (allowedOrigins.includes(origin)) return callback(null, true);
// //       callback(new Error("Not allowed by CORS"));
// //     },
// //     credentials: true,
// //   })
// // );
// const allowedOrigins = [
//   "https://groceryapp-frontend-yxdr.vercel.app",
//   "http://localhost:5173",
// ];

// app.use(
//   cors({
//     origin: function (origin, callback) {
//       // Allow requests with no origin (like mobile apps or curl)
//       if (!origin) return callback(null, true);
      
//       if (allowedOrigins.indexOf(origin) !== -1) {
//         callback(null, true);
//       } else {
//         callback(new Error("Not allowed by CORS"));
//       }
//     },
//     credentials: true, // THIS IS ESSENTIAL
//     methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
//     allowedHeaders: ["Content-Type", "Authorization"]
//   })
// );
// app.use(cookieParser());
// app.use(express.json());

// app.use("/images", express.static("uploads"));
// app.use("/api/user", userRoutes);
// app.use("/api/seller", sellerRoutes);
// app.use("/api/product", productRoutes);
// app.use("/api/cart", cartRoutes);
// app.use("/api/address", addressRoutes);
// app.use("/api/order", orderRoutes);

// app.get("/", (req, res) => {
//   res.send("API is running");
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   connectDB();
//   console.log(`Server running on port ${PORT}`);
// });


import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

import { connectDB } from "./config/connectDB.js";
import { connectCloudinary } from "./config/cloudinary.js";

import userRoutes from "./routes/user.routes.js";
import sellerRoutes from "./routes/seller.routes.js";
import productRoutes from "./routes/product.routes.js";
import cartRoutes from "./routes/cart.routes.js";
import addressRoutes from "./routes/address.routes.js";
import orderRoutes from "./routes/order.routes.js";

dotenv.config();

const app = express();

/* ================= TRUST PROXY (REQUIRED ON RENDER) ================= */
app.set("trust proxy", 1);

/* ================= ALLOWED ORIGINS ================= */
const allowedOrigins = [
  "https://groceryapp-frontend-yxdr.vercel.app",
  "http://localhost:5173",
  "http://localhost:3000",
];

/* ================= CORS (MUST COME FIRST) ================= */
app.use(
  cors({
    origin: (origin, callback) => {
      // Allow Postman / curl / mobile apps
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(null, false);
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  })
);

/* ================= MIDDLEWARES ================= */
app.use(express.json());
app.use(cookieParser());

/* ================= CLOUDINARY ================= */
await connectCloudinary();

/* ================= STATIC ================= */
app.use("/images", express.static("uploads"));

/* ================= ROUTES ================= */
app.use("/api/user", userRoutes);
app.use("/api/seller", sellerRoutes);
app.use("/api/product", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/address", addressRoutes);
app.use("/api/order", orderRoutes);

/* ================= TEST ================= */
app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

/* ================= SERVER ================= */
const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  await connectDB();
  console.log(`Server running on port ${PORT}`);
});






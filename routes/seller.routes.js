// import express from "express";
// import {
//   checkAuth,
//   sellerLogin,
//   sellerLogout,
// } from "../controller/seller.controller.js";
// import { authSeller } from "../middlewares/authSeller.js";
// const router = express.Router();

// router.post("/login", sellerLogin);
// router.get("/is-auth", authSeller, checkAuth);
// router.get("/logout", authSeller, sellerLogout);

// export default router;


import express from "express";
import {
  sellerLogin,
  sellerLogout,
} from "../controller/seller.controller.js";
import { authSeller } from "../middlewares/authSeller.js";

const router = express.Router();

// ===============================
// SELLER LOGIN
// ===============================
router.post("/login", sellerLogin);

// ===============================
// CHECK SELLER AUTH
// ===============================
router.get("/is-auth", authSeller, (req, res) => {
  res.status(200).json({
    success: true,
    seller: req.seller, // coming from authSeller middleware
  });
});

// ===============================
// SELLER LOGOUT
// ===============================
router.get("/logout", authSeller, sellerLogout);

export default router;



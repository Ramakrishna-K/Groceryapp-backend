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

// routes/seller.routes.js
import express from "express";
import {
  sellerLogin,
  sellerLogout,
  checkAuth,
} from "../controller/seller.controller.js";
// import { authSeller } from "../middlewares/authSeller.js";
import { authSeller } from "../middlewares/authSeller.js";

const router = express.Router();

// seller login
router.post("/login", sellerLogin);

// check seller auth
router.get("/is-auth", authSeller, checkAuth);

// seller logout
router.get("/logout", authSeller, sellerLogout);

export default router;




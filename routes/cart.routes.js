// import express from "express";
// import { updateCart } from "../controller/cart.controller.js";
// import authUser from "../middlewares/authUser.js";

// const router = express.Router();
// router.put("/update", authUser, updateCart);
// export default router;



import express from "express";
// Double check: Is your folder "controllers" or "controller"?
import { updateCart } from "../controllers/cart.controller.js"; 
// Double check: Is your folder "middleware" or "middlewares"?
import authUser from "../middleware/authUser.js"; 

const cartRouter = express.Router();

cartRouter.put("/update", authUser, updateCart);

export default cartRouter;

// import express from "express";
// import { updateCart } from "../controller/cart.controller.js";
// import authUser from "../middlewares/authUser.js";

// const router = express.Router();
// router.put("/update", authUser, updateCart);
// export default router;


import express from "express";
// Ensure your folder is actually named 'controller'
import { updateCart } from "../controller/cart.controller.js"; 
// Ensure your folder is actually named 'middlewares'
import authUser from "../middlewares/authUser.js"; 

const cartRouter = express.Router();

// This route uses the authUser middleware to get the userId from the cookie
// and then calls updateCart to update the database.
cartRouter.put("/update", authUser, updateCart);

export default cartRouter;

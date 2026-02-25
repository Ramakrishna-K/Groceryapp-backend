// import express from "express";
// import { updateCart } from "../controller/cart.controller.js";
// import authUser from "../middlewares/authUser.js";

// const router = express.Router();
// router.put("/update", authUser, updateCart);
// export default router;

// cart.routes.js
import express from "express";
import { updateCart } from "../controllers/cart.controller.js";
import authUser from "../middleware/authUser.js";

const cartRouter = express.Router();

/**
 * Route: PUT /api/cart/update
 * Middleware: authUser (extracts token from cookie and adds userId to req.body)
 * Controller: updateCart (handles the database logic)
 */
cartRouter.put("/update", authUser, updateCart);

export default cartRouter;



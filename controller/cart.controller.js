// import User from "../models/user.model.js";

// // update user cartData: /api/cart/update

// export const updateCart = async (req, res) => {
//   try {
//     const userId = req.user;
//     const { cartItems } = req.body;
//     await User.findByIdAndUpdate(userId, { cartItems }, { new: true });
//     res.status(200).json({ success: true, message: "Cart updated" });
//   } catch (error) {
//     res.status(500).json({ message: "Server error", error: error.message });
//   }
// };

import Cart from "../models/cart.model.js";

export const updateCart = async (req, res) => {
  try {
    // ✅ support both auth styles
    const userId = req.user?.id || req.user;

    const { productId, quantity } = req.body;

    if (!userId || !productId || quantity == null) {
      return res.status(400).json({
        success: false,
        message: "Missing data",
      });
    }

    const cart = await Cart.findOne({ user: userId });

    if (!cart) {
      return res.status(404).json({
        success: false,
        message: "Cart not found",
      });
    }

    const item = cart.items.find(
      (i) => i.product.toString() === productId
    );

    if (!item) {
      return res.status(404).json({
        success: false,
        message: "Item not in cart",
      });
    }

    item.quantity = quantity;
    await cart.save();

    res.status(200).json({
      success: true,
      cart,
    });
  } catch (error) {
    console.error("updateCart error:", error.message);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};



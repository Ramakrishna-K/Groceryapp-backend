// import jwt from "jsonwebtoken";
// export const authSeller = async (req, res, next) => {
//   const { sellerToken } = req.cookies;
//   if (!sellerToken) {
//     return res.status(401).json({ message: "Unauthorized", success: false });
//   }
//   try {
//     const decoded = jwt.verify(sellerToken, process.env.JWT_SECRET);
//     if (decoded.email === process.env.SELLER_EMAIL) {
//       return next();
//     } else {
//       return res.status(403).json({ message: "Forbidden", success: false });
//     }
//   } catch (error) {
//     console.error("Error in authSeller middleware:", error);
//     return res.status(401).json({ message: "Invalid token", success: false });
//   }
// };



import jwt from "jsonwebtoken";

export const authSeller = (req, res, next) => {
  try {
    const token = req.cookies?.sellerToken;

    // ❌ No token
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Seller not logged in",
      });
    }

    // ✅ Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // ❌ Role check (important)
    if (decoded.role !== "seller") {
      return res.status(403).json({
        success: false,
        message: "Unauthorized role",
      });
    }

    // ❌ Extra safety: email check
    if (decoded.email !== process.env.SELLER_EMAIL) {
      return res.status(403).json({
        success: false,
        message: "Forbidden",
      });
    }

    // ✅ Attach seller data to request
    req.seller = decoded;

    next();
  } catch (error) {
    console.error("Error in authSeller middleware:", error);
    return res.status(401).json({
      success: false,
      message: "Invalid or expired token",
    });
  }
};




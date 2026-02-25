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


// import jwt from "jsonwebtoken";

// export const authSeller = async (req, res, next) => {
//   try {
//     // 1. Get token from cookies
//     const { sellerToken } = req.cookies;

//     // 2. Check if token exists
//     if (!sellerToken) {
//       return res.status(401).json({ 
//         success: false, 
//         message: "Not Authorized, please login again" 
//       });
//     }

//     // 3. Verify the token
//     const decoded = jwt.verify(sellerToken, process.env.JWT_SECRET);

//     /* 
//        4. LOGIC CHECK: 
//        If your app only has ONE seller (Admin), keep this line:
//        if (decoded.email !== process.env.SELLER_EMAIL) return res.status(403)...
       
//        If your app allows MULTIPLE sellers (Marketplace), use this:
//     */
//     req.seller = decoded; // This allows you to use req.seller.id in other routes

//     next();
//   } catch (error) {
//     console.error("Auth Middleware Error:", error.message);
//     return res.status(401).json({ 
//       success: false, 
//       message: "Session expired or invalid token" 
//     });
//   }
// };


import jwt from "jsonwebtoken";

export const sellerAuth = (req, res, next) => {
  try {
    const token = req.cookies?.sellerToken;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized: Seller not logged in",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // ✅ Store ONLY seller ID
    req.seller = decoded.id;

    next();
  } catch (error) {
    console.error("Seller Auth Error:", error.message);
    return res.status(401).json({
      success: false,
      message: "Unauthorized: Invalid or expired seller token",
    });
  }
};



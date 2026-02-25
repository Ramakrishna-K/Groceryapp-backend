// // import jwt from "jsonwebtoken";
// // // seller login :/api/seller/login
// // export const sellerLogin = async (req, res) => {
// //   try {
// //     const { email, password } = req.body;
// //     if (
// //       password === process.env.SELLER_PASSWORD &&
// //       email === process.env.SELLER_EMAIL
// //     ) {
// //       const token = jwt.sign({ email }, process.env.JWT_SECRET, {
// //         expiresIn: "7d",
// //       });
// //       res.cookie("sellerToken", token, {
// //         httpOnly: true,
// //         secure: process.env.NODE_ENV === "production",
// //         sameSite: process.env.NODE_ENV === "production" ? "none" : "Strict",
// //         maxAge: 7 * 24 * 60 * 60 * 1000,
// //       });
// //       return res
// //         .status(200)
// //         .json({ message: "Login successful", success: true });
// //     } else {
// //       return res
// //         .status(400)
// //         .json({ message: "Invalid credentials", success: false });
// //     }
// //   } catch (error) {
// //     console.error("Error in sellerLogin:", error);
// //     res.status(500).json({ message: "Internal server error" });
// //   }
// // };

// // // check seller auth  : /api/seller/is-auth
// // export const checkAuth = async (req, res) => {
// //   try {
// //     res.status(200).json({
// //       success: true,
// //     });
// //   } catch (error) {
// //     console.error("Error in checkAuth:", error);
// //     res.status(500).json({ message: "Internal server error" });
// //   }
// // };
// // // logout seller: /api/seller/logout
// // export const sellerLogout = async (req, res) => {
// //   try {
// //     res.clearCookie("sellerToken", {
// //       httpOnly: true,
// //       secure: process.env.NODE_ENV === "production",
// //       sameSite: process.env.NODE_ENV === "production" ? "none" : "Strict",
// //     });
// //     return res.status(200).json({
// //       message: "Logged out successfully",
// //       success: true,
// //     });
// //   } catch (error) {
// //     console.error("Error in logout:", error);
// //     res.status(500).json({ message: "Internal server error" });
// //   }
// // };


// import jwt from "jsonwebtoken";
// // seller login :/api/seller/login
// export const sellerLogin = async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     if (
//       password === process.env.SELLER_PASSWORD &&
//       email === process.env.SELLER_EMAIL
//     ) {
//       const token = jwt.sign({ email }, process.env.JWT_SECRET, {
//         expiresIn: "7d",
//       });
//       res.cookie("sellerToken", token, {
//         httpOnly: true,
//         secure: process.env.NODE_ENV === "production",
//         sameSite: process.env.NODE_ENV === "production" ? "none" : "Strict",
//         maxAge: 7 * 24 * 60 * 60 * 1000,
//       });
//       return res
//         .status(200)
//         .json({ message: "Login successful", success: true });
//     } else {
//       return res
//         .status(400)
//         .json({ message: "Invalid credentials", success: false });
//     }
//   } catch (error) {
//     console.error("Error in sellerLogin:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// };

// // check seller auth  : /api/seller/is-auth
// export const checkAuth = async (req, res) => {
//   try {
//     res.status(200).json({
//       success: true,
//     });
//   } catch (error) {
//     console.error("Error in checkAuth:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// };
// // logout seller: /api/seller/logout
// export const sellerLogout = async (req, res) => {
//   try {
//     res.clearCookie("sellerToken", {
//       httpOnly: true,
//       secure: process.env.NODE_ENV === "production",
//       sameSite: process.env.NODE_ENV === "production" ? "none" : "Strict",
//     });
//     return res.status(200).json({
//       message: "Logged out successfully",
//       success: true,
//     });
//   } catch (error) {
//     console.error("Error in logout:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// };

import jwt from "jsonwebtoken";

// seller login: /api/seller/login
export const sellerLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (
      password === process.env.SELLER_PASSWORD &&
      email === process.env.SELLER_EMAIL
    ) {
      const token = jwt.sign({ email }, process.env.JWT_SECRET, {
        expiresIn: "7d",
      });

      // SETTING THE COOKIE
      res.cookie("sellerToken", token, {
        httpOnly: true,
        // Must be true for Render (HTTPS)
        secure: true, 
        // Must be "none" for Vercel -> Render cross-domain communication
        sameSite: "none", 
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
      });

      return res.status(200).json({ 
        message: "Login successful", 
        success: true 
      });
    } else {
      return res.status(400).json({ 
        message: "Invalid credentials", 
        success: false 
      });
    }
  } catch (error) {
    console.error("Error in sellerLogin:", error);
    res.status(500).json({ message: "Internal server error", success: false });
  }
};

// check seller auth: /api/seller/is-auth
// NOTE: This route is protected by your 'authSeller' middleware. 
// If the code reaches here, it means the middleware succeeded.
export const checkAuth = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "Seller is authenticated"
    });
  } catch (error) {
    console.error("Error in checkAuth:", error);
    res.status(500).json({ message: "Internal server error", success: false });
  }
};

// logout seller: /api/seller/logout
export const sellerLogout = async (req, res) => {
  try {
    // To clear a cookie, the options (except maxAge/expires) must MATCH the login options
    res.clearCookie("sellerToken", {
      httpOnly: true,
      secure: true,
      sameSite: "none",
    });
    
    return res.status(200).json({
      message: "Logged out successfully",
      success: true,
    });
  } catch (error) {
    console.error("Error in logout:", error);
    res.status(500).json({ message: "Internal server error", success: false });
  }
};







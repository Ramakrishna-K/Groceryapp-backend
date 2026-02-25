// import jwt from "jsonwebtoken";

// const authUser = async (req, res, next) => {
//   const { token } = req.cookies;
//   if (!token) {
//     return res.status(401).json({ message: "Unauthorized", success: false });
//   }
//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = decoded.id;
//     next();
//   } catch (error) {
//     console.error("Error in authUser middleware:", error);
//     return res.status(401).json({ message: "Invalid token", success: false });
//   }
// };

// export default authUser;


// // authUser.js
// import jwt from "jsonwebtoken";

// const authUser = async (req, res, next) => {
//   try {
//     // MUST match the name used in res.cookie ("token")
//     const { token } = req.cookies;

//     if (!token) {
//       return res
//         .status(401)
//         .json({ success: false, message: "Not Authorized, Login Again" });
//     }

//     // Verify the token
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);

//     // 1. Attach to req.user (Used by your checkAuth controller)
//     req.user = decoded.id;

//     // 2. Attach to req.body.userId (Used by your cart controller as requested)
//     req.body.userId = decoded.id;

//     next();
//   } catch (error) {
//     console.error("Error in authUser middleware:", error);
//     return res
//       .status(401)
//       .json({ success: false, message: "Session Expired" });
//   }
// };
// export default authUser;


// import jwt from "jsonwebtoken";

// const authUser = (req, res, next) => {
//   const token = req.cookies.token;

//   if (!token) {
//     return res.status(401).json({
//       success: false,
//       message: "Unauthorized: No token",
//     });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = decoded;
//     next();
//   } catch (error) {
//     return res.status(401).json({
//       success: false,
//       message: "Unauthorized: Invalid token",
//     });
//   }
// };

// export default authUser;

import jwt from "jsonwebtoken";

const authUser = (req, res, next) => {
  try {
    const token = req.cookies?.token; // ✅ SAFE access

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized: No token",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = { id: decoded.id }; // ✅ ensure id exists
    next();
  } catch (error) {
    console.error("authUser error:", error.message);
    return res.status(401).json({
      success: false,
      message: "Unauthorized",
    });
  }
};

export default authUser;





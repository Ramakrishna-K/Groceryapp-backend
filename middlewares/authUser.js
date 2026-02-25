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





import jwt from "jsonwebtoken";

const authUser = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized: No token",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized: Invalid token",
    });
  }
};

export default authUser;


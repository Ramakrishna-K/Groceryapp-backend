// import Address from "../models/address.model.js";
// // add address :/api/address/add
// export const addAddress = async (req, res) => {
//   try {
//     const { address } = req.body;
//     const userId = req.user;
//     const savedAddress = await Address.create({
//       ...address,
//       userId: userId,
//     });
//     res
//       .status(201)
//       .json({ success: true, message: "Address added successfully" });
//   } catch (error) {
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// };

// //get address:// /api/address/get
// export const getAddress = async (req, res) => {
//   try {
//     const userId = req.user;
//     const addresses = await Address.find({ userId });
//     res.status(200).json({ success: true, addresses });
//   } catch (error) {
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// };

import Address from "../models/address.model.js";

export const getAddress = async (req, res) => {
  try {
    // ✅ support both auth styles
    const userId = req.user?.id || req.user;

    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "User not authenticated",
      });
    }

    const addresses = await Address.find({ user: userId });

    res.status(200).json({
      success: true,
      addresses,
    });
  } catch (error) {
    console.error("getAddress error:", error.message);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};


// import Address from "../models/address.model.js";

// export const addAddress = async (req, res) => {
//   try {
//     // ✅ SAME AUTH LOGIC AS getAddress
//     const userId = req.user?.id || req.user;

//     const { name, phone, city, state, pincode, addressLine } = req.body;

//     if (!userId || !name || !phone || !city || !state || !pincode || !addressLine) {
//       return res.status(400).json({
//         success: false,
//         message: "All fields required",
//       });
//     }

//     const newAddress = new Address({
//       user: userId,
//       name,
//       phone,
//       city,
//       state,
//       pincode,
//       addressLine,
//     });

//     await newAddress.save();

//     res.status(201).json({
//       success: true,
//       message: "Address added successfully",
//     });
//   } catch (error) {
//     console.error("addAddress error:", error.message);
//     res.status(500).json({
//       success: false,
//       message: "Server error",
//     });
//   }
// };





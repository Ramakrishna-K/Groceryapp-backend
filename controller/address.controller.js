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

// add address: /api/address/add
export const addAddress = async (req, res) => {
  try {
    // ✅ Use standardized auth
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "User not authenticated",
      });
    }

    const { name, phone, city, state, pincode, addressLine, country, email } =
      req.body;

    // Check required fields
    if (!name || !phone || !city || !state || !pincode || !addressLine) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Create address
    const newAddress = await Address.create({
      user: userId,
      name,
      phone,
      city,
      state,
      pincode,
      addressLine,
      country, // optional
      email, // optional
    });

    res.status(201).json({
      success: true,
      message: "Address added successfully",
      address: newAddress,
    });
  } catch (error) {
    console.error("addAddress ERROR:", error.message);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

// get address: /api/address/get
export const getAddress = async (req, res) => {
  try {
    const userId = req.user?.id;

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
    console.error("getAddress ERROR:", error.message);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};






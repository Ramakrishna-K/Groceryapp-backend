// import mongoose from "mongoose";
// const addressSchema = new mongoose.Schema({
//   userId: { type: String, required: true },
//   firstName: { type: String, required: true },
//   lastName: { type: String, required: true },
//   email: { type: String, required: true },
//   street: { type: String, required: true },
//   city: { type: String, required: true },
//   state: { type: String, required: true },
//   zipCode: { type: Number, required: true },
//   country: { type: String, required: true },
//   phone: { type: String, required: true },
// });

// const Address = mongoose.model("Address", addressSchema);
// export default Address;


import mongoose from "mongoose";

const addressSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    name: { type: String, required: true },       // Full name
    phone: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    pincode: { type: String, required: true },    // String to preserve leading zeros
    addressLine: { type: String, required: true },
    country: { type: String, default: "India" },  // optional, default
    email: { type: String },                       // optional, if needed
  },
  { timestamps: true }
);

export default mongoose.model("Address", addressSchema);



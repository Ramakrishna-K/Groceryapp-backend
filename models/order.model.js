// import mongoose from "mongoose";
// const orderSchema = new mongoose.Schema(
//   {
//     userId: { type: String, required: true, ref: "User" },
//     items: [
//       {
//         product: { type: String, required: true, ref: "Product" },
//         quantity: { type: Number, required: true },
//       },
//     ],
//     amount: { type: Number, required: true },
//     address: { type: String, required: true, ref: "Address" },
//     status: { type: String, default: "ispaid" },
//     paymentType: { type: String, required: true },
//     isPaid: { type: Boolean, required: true, default: false },
//   },
//   { timestamps: true }
// );
// const Order = mongoose.model("Order", orderSchema);
// export default Order;



import mongoose from "mongoose";
const { Schema, model, Types } = mongoose;

const orderSchema = new Schema(
  {
    userId: { type: Types.ObjectId, required: true, ref: "User" },
    items: [
      {
        product: { type: Types.ObjectId, required: true, ref: "Product" },
        quantity: { type: Number, required: true },
      },
    ],
    amount: { type: Number, required: true },
    address: { type: Types.ObjectId, required: true, ref: "Address" },
    status: { type: String, default: "Pendding" },
    paymentType: { type: String, required: true },
    isPaid: { type: Boolean, default: false },
    shortOrderId: { type: String }, // optional for tracking
  },
  { timestamps: true }
);

const Order = model("Order", orderSchema);
export default Order;

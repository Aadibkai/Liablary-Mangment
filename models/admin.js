import { model, Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const adminSchema = new Schema(
  {
    username: { type: String },
    email: { type: String },
    hashPassword: { type: String },
  
  },
  { timestamps: true }
);
adminSchema.virtual("password").set(function (password) {
  this.hashPassword = bcrypt.hashSync(password, 10);
});

adminSchema.methods = {
  matchPassword: async function (password) {
    return await bcrypt.compare(password, this.hashPassword);
  },
  generateToken: async function () {
    return jwt.sign(
      { _id: this._id, email: this.email, role: this.role },
      "SUPERSECRETSTRING",
      { expiresIn: "1d" }
    );
  },
};


export default model("admin", adminSchema);

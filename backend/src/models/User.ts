import mongoose from "mongoose";
import { IUser } from "../schemas/User";
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    select: false
  }
}
);
const User = mongoose.model<IUser>("User", UserSchema);
module.exports = User;

import mongoose from "mongoose";
import { IUser } from "../interface/user-interface";

export const UserSchema = new mongoose.Schema({
  name: {
    type: String
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
},
  {
    timestamps: true
  }
);

const User = mongoose.model<IUser>("User", UserSchema);
export default User;

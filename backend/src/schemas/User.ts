import { Schema, model } from "mongoose";

const UserSchema = new Schema(
  {
    email: String,
    password: String
  },
  {
    timestamps: true
  }
);

export default model("User", UserSchema);

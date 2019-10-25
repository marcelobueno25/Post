import mongoose from "mongoose";

export interface IUser extends mongoose.Document {
    name: string; 
    email: string;
    password: string; 
  };
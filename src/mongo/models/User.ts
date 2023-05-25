import mongoose from "mongoose";

export interface IUser {
    name: string;
    email: string;
    password: string;
}
  
export const userSchema = new mongoose.Schema<IUser>({
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    //   validate: (v: string) => isEmail(v),
    //   message: 'Не валидный email',
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
});
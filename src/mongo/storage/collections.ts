import mongoose from "mongoose";
import { IBlog, blogSchema } from "../models/Blog";
import { IUser, userSchema } from "../models/User";


export const Users = mongoose.model<IUser>("User", userSchema, 'User')
export const Blogs = mongoose.model<IBlog>("Blog", blogSchema, 'Blog')

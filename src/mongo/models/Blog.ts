import mongoose, { Types } from "mongoose";

export interface IBlog {
    message?: String;
    file?: {
        base64: String,
        filename: String,
    };
    authorId: mongoose.Types.ObjectId;
    createdAt?: Date;
}
  
export const blogSchema = new mongoose.Schema<IBlog>({
    message: String,
    file: {
        base64: String,
        filename: String,
    },
    authorId: mongoose.Types.ObjectId,
    createdAt: {
      type: Date,
      default: () => new Date(),
    },
})
import { IBlog } from "../models/Blog";
import { Blogs } from "../storage/collections";


export const saveBlog = async (blog: IBlog) => {
    return await Blogs.create(blog)
}
import mongoose from "mongoose"

const url = "mongodb://localhost:27017/BlogWebsite"

export const mongoConnect = async () => {
    try {
        await mongoose.connect(url)
    } catch (err) {
        console.log(err)
    }
}
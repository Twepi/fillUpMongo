import mongoose from "mongoose"

const url = "mongodb://localhost:27017/testWork"

export const mongoConnect = async () => {
    try {
        await mongoose.connect(url)
    } catch (err) {
        console.log(err)
    }
}
import { IUser } from "../models/User";
import { Users } from "../storage/collections";


export const saveUser = async (user: IUser) => {
    return await Users.create(user)
}
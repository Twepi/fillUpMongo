import randomName from 'random-name'
import randomEmail from 'random-email'
import randomWords from 'random-words'
import bcrypt from 'bcrypt'
import { IUser } from './mongo/models/User'
import { IBlog } from './mongo/models/Blog'
import { saveUser } from './mongo/queries/User'
import { saveBlog } from './mongo/queries/Blog'

export const fillUpMongo = async () => {
    let promises: Promise<void>[] = []
    for (let i = 0; i < 1000; i++) {
        let promise = createSingleRecord()
        promises.push(promise)
    }
    await Promise.all(promises)
}

const createSingleRecord = async () => {
    const user = await genUser()
    console.log('created user:')
    console.log(user)

    const savedUser = await saveUser(user)
    console.log('user saved')

    const blog = genBlog(savedUser)
    console.log('created blog')
    console.log(blog)


    await saveBlog(blog)
    console.log('blog saved')
}

const genUser = async () => {
    const firstName = randomName.first()
    const lastName = randomName.last()
    const fullName = firstName + " " + lastName
    const email = randomEmail()
    const password = (Math.random() + 1).toString(36).substring(2)
    const salt = await bcrypt.genSalt(10)
    const hashed = await bcrypt.hash(password, salt)

    const user: IUser = {
        name: fullName,
        password: hashed,
        email: email
    } 
   return user
}

const genBlog = (user: any) => {
    const textArr = randomWords({ min: 5, max: 30 })
    const text = textArr.join(' ')
    const fileBase64 = Buffer.from("fake image").toString('base64')


    const blog: IBlog = {
        message: text,
        file: {
            base64: fileBase64,
            filename: "somefile.png"
        },
        authorId: user._id
    } 
    return blog
}

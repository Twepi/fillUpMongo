import { fillUpMongo } from "./fillUp"
import { mongoConnect } from "./mongo/storage/connect"


const main = async () => {
    await mongoConnect()
    await fillUpMongo()
    process.exit(0)
}

main()
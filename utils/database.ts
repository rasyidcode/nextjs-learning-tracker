import mongoose from 'mongoose'

let isConnected = false

export const connectToDB = async () => {
    try {
        if (isConnected) {
            console.log('MongoDB is already connected')
            return
        }
        
        await mongoose.connect(process.env.MONGODB_URI as string, {
            dbName: 'nextjslearningtracker'
        })

        isConnected = true

        console.log('MongoDB connected')
    } catch(error: unknown) {
        console.log(error)
    }
}
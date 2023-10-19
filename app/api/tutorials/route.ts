import Tutorial from "@/models/tutorial"
import { connectToDB } from "@/utils/database"

export const GET = async () => {
    try {
        await connectToDB()

        const tutorials = await Tutorial.find()

        return new Response(JSON.stringify(tutorials), {
            status: 200
        })
    } catch (error: unknown) {
        return new Response('Failed to fetch tutorials', {
            status: 500
        })
    }
}
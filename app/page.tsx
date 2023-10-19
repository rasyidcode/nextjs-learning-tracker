import { connectToDB } from '@/utils/database'

export default async function Home() {
  // const tutorials = await fetch('api/tutorials', {
  //   method: 'GET'
  // })
  // console.log('tutorials: ', tutorials)

  await connectToDB()

  return (
    <div>
      Hello, World!
    </div>
  )
}

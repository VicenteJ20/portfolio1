import Head from 'next/head'
import { GeneralLayout } from '../Layout/GeneralLayout'

export default function Home() {
  return (
    <>
      <Head>
        <title>Vicente Jorquera - Home</title>
        <meta name="description" content="Vicente Jorquera - Web developer - Computer Engenieer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GeneralLayout>
        <h1>Hola mundo</h1>
      </GeneralLayout>
    </>
  )
}

import Head from 'next/head'
import { GeneralLayout } from '../Layout/GeneralLayout'
import { CarouselHome } from '../components/CarouselHome';
import { LatestArticles } from '../components/LatestArticles';

export default function Home() {
  return (
    <>
      <Head>
        
        <title>Inicio - Vicente Jorquera</title>
        
        <meta name="description" content="Vicente Jorquera - Web developer - Computer Engenieer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GeneralLayout>
        <CarouselHome />
        <LatestArticles />
      </GeneralLayout>
    </>
  )
}

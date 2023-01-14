import { GeneralLayout } from "../Layout/GeneralLayout"
import Footer from "./Footer"
import Head from 'next/head';
interface ProjectURL {
  url: string
}

interface ProjectData {
  category: string,
  title: string,
  subtitle: string,
  imgHomeUrl: string,
  authorData: {
    name: string,
    profilePic: string
  }
}

const ProjectArticle = ({ url }: ProjectURL) =>{
  return (
    <>
      <Head>
        <title>{url}</title>
      </Head>
      <GeneralLayout>
        <header className=' pt-12 text-center flex flex-col gap-6'>
          <p className='border-2 w-fit px-8 border-gray-700 text-base md:text-lg rounded-lg mx-auto'>Programación</p>
          <h1 className='text-lg font-black md:text-6xl mt-2 mx-2'>{url.replaceAll('-', '')}</h1>
        </header>
        <Footer />
      </GeneralLayout>
    </>
  )
}

export default ProjectArticle
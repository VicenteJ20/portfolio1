import Image from "next/image"
import { GeneralLayout } from "../Layout/GeneralLayout"
import { MdLocationOn } from 'react-icons/md'
import { FiMail, FiDownloadCloud } from 'react-icons/fi'
import MySkills from '../json/myskills.json'
import MyProjects from '../json/projectsData.json'
import Link from "next/link"
import ProjectCard from "../components/ProjectCard"

const About = () => {
  return (
    <GeneralLayout>
      <section className='w-100'>
        <div className='w-100 mb-8 xl:mb-12 h-32 md:h-64 xl:h-80 relative bg-gray-900 rounded-lg bg-no-repeat inset-0 bg-opacity-30 bg-cover bg-center' style={{backgroundImage: "URL('/images/about/about_background.jpg')"}}>
          <div className='bg-white w-18 h-18 md:w-28 md:h-24 pt-2 pl-2 pr-2 pb-0 rounded-md absolute left-5 xl:left-8 md:-bottom-8 -bottom-12 xl:-bottom-14 xl:w-36 xl:h-36'>
            <Image src={'/images/about/profile.jpg'} className=' w-16 h-16 md:w-24 md:h-24 xl:w-32 xl:h-32 rounded-md' alt='Author profile image' width={500} height={500}/>
          </div>
          <div className='absolute text-sm md:text-base right-0 -bottom-12 xl:-bottom-14 bg-teal-600 text-white p-2 rounded-md'>Available for Work</div>
        </div>
        <div className='w-100 mt-16 xl:mt-24 flex gap-2 items-center'>
          <h1 className='font-black text-xl md:text-4xl'>Vicente Jorquera</h1>
          <div className='w-3 h-3 bg-gray-400 rounded-full'></div>
          <h3 className='text-gray-500 font-medium flex items-center text-xl'><MdLocationOn className='fill-gray-500' /> Chile</h3>
        </div>
        <div className='w-100 mt-3 xl:mt-5 text-gray-500 flex gap-2 gap-y-3 flex-wrap justify-between'>
          <div className=' flex gap-2 flex-wrap gap-y-3 items-center w-100'>
            <a className='hover:text-teal-600' href='https://www.instagram.com/jvicente_20'>@jvicente_20</a>
            <span>|</span>
            <a className='hover:text-teal-600' href='https://www.github.com/VicenteJ20'>@VicenteJ20</a>
            <div className='w-2 h-2 bg-gray-300 rounded-full' />
            <h3 className='text-gray-900 font-semibold'>IT Engineer - Web developer</h3>
          </div>
          <div className='flex gap-4'>
            <Link href={'/contact'} className='flex gap-1 items-center border-2 px-2 py-1 border-black text-black rounded-md'><FiMail /> Menssage</Link>
            <button className='flex gap-1 items-center border-2 px-2 py-1 border-black text-white bg-gray-900 rounded-md'> <FiDownloadCloud /> Download CV</button>
          </div>
        </div>
        <div className='mt-8 pt-5 border-t-2'>
          <h2 className='text-2xl font-bold'>Skills</h2>
          <div className='flex gap-3 mt-4 flex-wrap md:w-2/3 xl:w-2/5'>
            {
              MySkills.map(x => <div key={x.id} className='border-2 border-gray-400 text-gray-600 font-medium px-2 py-1 rounded-md'>{x.name}</div>)
            }
          </div>
        </div>
        <div className='mt-3 pt-5'>
          <h2 className='text-2xl font-bold'>Projects</h2>
          <div className='w-100 min-h-screen grid grid-cols-1 md:grid-cols-3 gap-4 xl:gap-10 gap-y-10 md:gap-y-4 mt-5'>
            {
              MyProjects.map(x => <ProjectCard key={x.id} id={x.id} inProgress={x.inProgress} title={x.title} description={x.description} startDate={x.startDate} projectURL={x.projectURL} imageURL={x.imageURL} attributionIMG={x.attributionImg} />)
            }
          </div>
        </div>
      </section>
    </GeneralLayout>
  )
}

export default About
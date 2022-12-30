import Image from "next/image"
import { GeneralLayout } from "../../Layout/GeneralLayout"
import { MdLocationOn } from 'react-icons/md'

const About = () => {
  return (
    <GeneralLayout>
      <section className='w-100'>
        <div className='w-100 mb-8 xl:mb-12 h-32 md:h-64 xl:h-80 relative bg-gray-900 rounded-lg bg-no-repeat inset-0 bg-opacity-30 bg-cover bg-center' style={{backgroundImage: "URL('https://images.unsplash.com/photo-1622737133809-d95047b9e673?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80')"}}>
          <div className='bg-white w-18 h-18 md:w-28 md:h-24 pt-2 pl-2 pr-2 pb-0 rounded-md absolute z-30 left-5 xl:left-8 md:-bottom-8 -bottom-12 xl:-bottom-14 xl:w-36 xl:h-36'>
            <Image src={'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1085&q=80'} className=' w-16 h-16 md:w-24 md:h-24 xl:w-32 xl:h-32 rounded-md' alt='Author profile image' width={500} height={500}/>
          </div>
          <div className='absolute text-sm md:text-base right-0 -bottom-12 xl:-bottom-14 bg-teal-600 text-white p-2 rounded-md'>Available for Work</div>
        </div>
        <div className='w-100 mt-16 xl:mt-24 flex gap-2 items-center'>
          <h1 className='font-black text-xl md:text-4xl'>Vicente Jorquera</h1>
          <div className='w-3 h-3 bg-gray-400 rounded-full'></div>
          <h3 className='text-gray-500 font-medium flex items-center text-xl'><MdLocationOn className='fill-gray-500' /> Chile</h3>
        </div>
        <div className='w-100 mt-3 xl:mt-5 text-gray-500 flex gap-2 justify-between'>
          <div className=' flex gap-2 items-center w-100'>
            <a className='hover:text-teal-600' href='https://www.instagram.com/jvicente_20'>@jvicente_20</a>
            <span>|</span>
            <a className='hover:text-teal-600' href='https://www.github.com/VicenteJ20'>@VicenteJ20</a>
            <div className='w-2 h-2 bg-gray-300 rounded-full' />
            <h3 className='text-gray-900 font-semibold'>IT Engineer - Web developer</h3>
          </div>
          <div className='flex gap-2'>
              sdfskldfks
          </div>
        </div>
      </section>
    </GeneralLayout>
  )
}

export default About
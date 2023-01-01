import Link from "next/link"
import Image from 'next/image'

interface DataProps {
  id: number,
  inProgress: boolean,
  title: string,
  description: string,
  startDate: string,
  projectURL: string,
  imageURL: string,
  attributionIMG: string
}


const ProjectCard = ({ id, inProgress, title, description, startDate, projectURL, imageURL, attributionIMG } : DataProps) => {
  return (
    <Link href={`/projects/${id}`} className='relative hover:transition-all flex justify-between flex-col gap-3 rounded-lg hover:bg-gray-200 p-3'>
      <div className={`absolute right-4 top-4 px-3 ${inProgress ? 'bg-teal-500 text-gray-900' : 'bg-gray-900 text-white'} rounded-md font-medium`}>{inProgress ? 'In progress' : 'Finished'}</div>
      <Image src={imageURL} width={1000} height={1000} className='w-100 h-50 rounded-lg' alt={attributionIMG} />
      <h2 className='font-bold text-xl xl:text-2xl xl:h-14 text-gray-900'>{title}</h2>
      <p className='font-base text-sm xl:text-base text-gray-500'>{description}</p>
      <div className='flex justify-between items-center'>
        <button className='flex items-center px-2 py-1 border-2 font-semibold text-gray-600 border-gray-900 rounded-md'>Learn more</button>
        <p className='text-sm xl:text-lg font-bold'>{startDate}</p>
      </div>
    </Link>
  )
}

export default ProjectCard
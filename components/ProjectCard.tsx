import Link from "next/link"
import Image from 'next/image'

interface DataProps {
  id: number,
  inProgress: boolean,
  title: string,
  description: string,
  startDate: string,
  imageURL: string,
  attributionIMG: string
}


const ProjectCard = ({ id, inProgress, title, description, startDate, imageURL, attributionIMG } : DataProps) => {

  function formatLink( title: string ) : string {
    let link = title.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    return link.replaceAll('(', '').replaceAll(')', '').replaceAll('-', '').replaceAll(' ', '-').replaceAll('!', '').replaceAll('¡', '').replaceAll('.', '').toLowerCase().replace('--', '-')
  }
  return (
    <Link href={`/projects/${formatLink(title)}`} className='relative hover:transition-all flex justify-between flex-col gap-3 rounded-lg hover:bg-gray-200 p-3'>
      <div className={`absolute right-6 top-6 px-3 ${inProgress ? 'bg-teal-500 text-gray-900' : 'bg-gray-900 text-white'} rounded-md font-medium`}>{inProgress ? 'En progreso' : 'Finalizado'}</div>
      <Image src={imageURL} width={1000} height={1000} className='w-100 h-50 rounded-lg' alt={attributionIMG} />
      <h2 className='font-bold text-xl xl:text-2xl xl:h-14 text-gray-900'>{title}</h2>
      <p className='font-base text-sm xl:text-base text-gray-500'>{description}</p>
      <div className='flex justify-between items-center'>
        <button className='flex items-center px-2 py-1 border-2 font-semibold text-gray-600 border-gray-900 rounded-md'>Más información</button>
        <p className='text-sm xl:text-lg font-bold'>{startDate}</p>
      </div>
    </Link>
  )
}

export default ProjectCard
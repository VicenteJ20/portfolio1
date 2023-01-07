import Image from "next/image"
import Link from "next/link"

function formatLink( title: string ) : string {
  let link = title.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
  return link.replaceAll(' ', '-').replaceAll('!', '').replaceAll('¡', '').replaceAll('.', '').toLowerCase()
}

interface data {
  category: string,
  imgUrl: string,
  title: string,
  description: string,
  authorURL: string,
  authorName: string,
  attributionImg: string,
  date: string
}

export const LatestCard = ({ category, imgUrl, title, description, authorURL, authorName, attributionImg, date } : data) => {
  
  return (
    <Link href={`/articles/${formatLink(title)}`} className='relative hover:transition-all flex justify-between flex-col gap-3 rounded-lg hover:bg-gray-200 p-3'>
      <div className='absolute right-4 top-4 px-3 bg-black rounded-md text-white font-medium'>{category}</div>
      <Image src={imgUrl} width={1000} height={1000} className='w-100 h-50 rounded-lg' alt={attributionImg} />
      <h2 className='font-bold text-xl xl:text-2xl xl:h-14 text-gray-900'>{title}</h2>
      <p className='font-base text-sm xl:text-base text-gray-500'>{description}</p>
      <div className='flex justify-between items-center'>
        <div className='flex gap-2 items-center'>
          <Image src={authorURL} alt={`Author ${authorName}`} width={500} height={500} className=' w-8 h-8 rounded-full' />
          <h3 className='font-bold text-sm xl:text-lg'>{authorName}</h3>
        </div>
        <p className='text-sm xl:text-lg font-bold'>{date}</p>
      </div>
    </Link>
  )
}
import Image from "next/image"
import Link from "next/link"

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
    <Link href={'/'} className='relative flex flex-col gap-3 rounded-lg'>
      <div className='absolute right-1 top-1 px-3 bg-black rounded-md text-white font-medium'>{category}</div>
      <Image src={imgUrl} width={1000} height={1000} className='w-100 h-50 rounded-lg' alt={attributionImg} />
      <h2 className='font-bold text-xl xl:text-2xl xl:h-14 text-gray-900'>{title}</h2>
      <p className='font-base text-sm xl:text-base text-gray-500'>{description}</p>
      <div className='flex justify-between items-center'>
        <div className='flex gap-2 items-center'>
          <Image src={authorURL} alt={`Author ${authorName}`} width={500} height={500} className=' w-8 h-8 rounded-full' />
          <h3 className='font-bold text-lg'>{authorName}</h3>
        </div>
        <p className='text-lg font-bold'>{date}</p>
      </div>
    </Link>
  )
}
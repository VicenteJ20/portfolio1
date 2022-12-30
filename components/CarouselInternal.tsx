import Link from "next/link"

interface dataProps {
  id: number,
  title: string,
  subtitle: string,
  linkToArticle: string,
  imageURL: string
}

export const CarouselInternal = ({ id, title, subtitle, linkToArticle, imageURL } : dataProps ) => {

  return (
    <div className="bg-gray-200 w-100 bg-cover inset-0 bg-center bg-no-repeat h-auto md:h-96 xl:h-130 rounded-lg " style={{backgroundImage: `url("${imageURL}")`}}>
      <Link href={linkToArticle} className='absolute cursor-pointer inset-0 bg-black bg-opacity-60 rounded-lg'>
        <div className='content absolute bottom-3 text-white p-10 flex flex-col gap-4 w-9/12 '>
          <p className='text-base xl:text-xl text-gray-300'>Featured</p>
          <h2 className='text-4xl xl:text-5xl font-black'>{title}</h2>
          <p className='text-base xl:text-xl font-normal'>{subtitle}</p>
        </div>
      </Link>
    </div>
  )
}
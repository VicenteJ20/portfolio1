import { useState } from "react"
import jsonData from '../json/latestArticles.json'
import { LatestCard } from "./LatestCard"

export const LatestArticles = () => {
  const [active, setActive] = useState('All')

  function handleActive(e: any) : void {
    setActive(e.target.value)
  }

  return (
    <section>
      <h2 className=' text-3xl font-bold'>Latest articles</h2>
      <form className='flex gap-5 md:gap-10 flex-wrap mt-5 max-w-full'>
        <input onClick={handleActive} type='button' value='All' name='all' id='all' className={`${'All' === active ? 'bg-black text-white font-bold' : ''} rounded-md border-2 cursor-pointer w-32 text-center px-4 py-1`} />
        <input onClick={handleActive} type='button' value='Code' name='code' id='code' className={`${'Code' === active ? 'bg-black text-white font-bold' : ''} rounded-md border-2 cursor-pointer w-32 text-center px-4 py-1`} />
        <input onClick={handleActive} type='button' value='Systems' name='systems' id='systems' className={`${'Systems' === active ? 'bg-black text-white font-bold' : ''} rounded-md border-2 cursor-pointer w-32 text-center px-4 py-1`} />
        <input onClick={handleActive} type='button' value='Cloud' name='cloud' id='cloud' className={` ${'Cloud' === active ? 'bg-black text-white font-bold' : ''} rounded-md border-2 cursor-pointer w-32 text-center px-4 py-1`} />
        <input onClick={handleActive} type='button' value='Technology' name='technology' id='technology' className={`${'Technology' === active ? 'bg-black text-white font-bold' : ''} rounded-md border-2 cursor-pointer w-32 text-center px-4 py-1`} />
      </form>
      <div className='w-100 grid grid-cols-1 md:grid-cols-3 gap-4 gap-y-10 md:gap-y-4 mt-5'>
        {
          jsonData.map(x => <LatestCard key={x.id} category={x.category} imgUrl={x.imgURL} title={x.title} description={x.description} authorURL={x.authorImg} authorName={x.authorName} attributionImg={x.attributionIMG} date={x.date} />)
        }
      </div>
    </section>
  )
}
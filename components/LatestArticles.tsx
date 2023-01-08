import { useState } from "react"
import jsonData from '../json/latestArticles.json'
import { LatestCard } from "./LatestCard"

export const LatestArticles = () => {
  const [active, setActive] = useState('Todo')

  function handleActive(e: any) : void {
    setActive(e.target.value)
  }

  return (
    <section className="mt-4">
      <h2 className=' text-3xl font-bold'>Últimos artículos</h2>
      <form className='flex gap-x-4 gap-y-2 md:gap-5 flex-wrap mt-5 w-100'>
        <input onClick={handleActive} type='button' value='Todo' name='todo' id='todo' className={`${'Todo' === active ? 'bg-black text-white font-bold' : ''} rounded-md border-2 cursor-pointer text-center px-4 py-1`} />
        <input onClick={handleActive} type='button' value='Código' name='code' id='code' className={`${'Código' === active ? 'bg-black text-white font-bold' : ''} rounded-md border-2 cursor-pointer text-center px-4 py-1`} />
        <input onClick={handleActive} type='button' value='Sistemas' name='systems' id='systems' className={`${'Sistemas' === active ? 'bg-black text-white font-bold' : ''} rounded-md border-2 cursor-pointer text-center px-4 py-1`} />
        <input onClick={handleActive} type='button' value='Cloud' name='cloud' id='cloud' className={` ${'Cloud' === active ? 'bg-black text-white font-bold' : ''} rounded-md border-2 cursor-pointer text-center px-4 py-1`} />
        <input onClick={handleActive} type='button' value='Tecnología' name='technology' id='technology' className={`${'Tecnología' === active ? 'bg-black text-white font-bold' : ''} rounded-md border-2 cursor-pointer text-center px-4 py-1`} />
      </form>
      <div className='w-100 grid grid-cols-1 md:grid-cols-3 gap-4 xl:gap-10 gap-y-10 md:gap-y-4 mt-5'>
        {
          jsonData.map(x => x.category === active || active === 'Todo' ? <LatestCard key={x.id} category={x.category} imgUrl={x.imgURL} title={x.title} description={x.description} authorURL={x.authorImg} authorName={x.authorName} attributionImg={x.attributionIMG} date={x.date} /> : '')
        }
      </div>
    </section>
  )
}
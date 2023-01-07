import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay } from 'swiper'
import { CarouselInternal } from './CarouselInternal'
import 'swiper/css'

const previewData = [
  {
    "id": 1,
    "title": "Necesitas aprender máquinas virtuales y necesitas hacerlo ¡Ahora!",
    "subtitle": "En este artículo te explico que son las máquinas virtuales, y por qué deberías aprender a usarlas.",
    "imageURL": "https://images.unsplash.com/photo-1474403078171-7f199e9d1335?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
  },
  {
    "id": 2,
    "title": "El mejor sistema operativo para desarrollar aplicaciones es...",
    "subtitle": "Los argumentos sobre cual es el mejor sistema operativo para desarrollar aplicaciones nunca llegararán aun acuerdo, en este artículo te mostraré cual es el mejor SO y por qué.",
    "imageURL": "https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1206&q=80"
  },
  {
    "id": 3,
    "title": "Top 3 tecnologías que debes aprender en 2023",
    "subtitle": "Technology is constantly changing and developers have to keep up to date almost as fast as the emergence of new technologies allows us to...",
    "imageURL": "https://images.unsplash.com/photo-1544847558-3ccacb31ee7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  }
]

export const CarouselHome = () => {
  function formatLink( title: string ) : string {
    let link = title.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    return link.replaceAll(' ', '-').replaceAll('!', '').replaceAll('¡', '').replaceAll('.', '').toLowerCase()
  }

  SwiperCore.use([Autoplay])
  return (
    <section className="w-100">
      <Swiper spaceBetween={20} slidesPerView={1} autoplay={{delay: 3000}}>
        {
          previewData.map(x => <SwiperSlide key={x.id} ><CarouselInternal id={x.id} title={x.title} subtitle={x.subtitle} linkToArticle={`/articles/${formatLink(x.title)}`} imageURL={x.imageURL} /></SwiperSlide>)
        }
      </Swiper>
    </section>
  )
}
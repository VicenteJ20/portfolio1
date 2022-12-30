import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay } from 'swiper'
import { CarouselInternal } from './CarouselInternal'
import 'swiper/css'

const previewData = [
  {
    "id": 1,
    "title": "You need to learn Virtual Machines ¡Right Now!",
    "subtitle": "In this article, I explain why you should learn what virtual machines are, and how you can create your own ones.",
    "linkToArticle": "/articles/1",
    "imageURL": "https://images.unsplash.com/photo-1474403078171-7f199e9d1335?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
  },
  {
    "id": 2,
    "title": "The best operating system for developing apps is...",
    "subtitle": "The argument over which is the best operating system for programming will never end. In this article I'll tell you why the best operating system...",
    "linkToArticle": "/articles/2",
    "imageURL": "https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1206&q=80"
  },
  {
    "id": 3,
    "title": "My top 3 technologies to learn on 2023",
    "subtitle": "Technology is constantly changing and developers have to keep up to date almost as fast as the emergence of new technologies allows us to...",
    "linkToArticle": "/articles/3",
    "imageURL": "https://images.unsplash.com/photo-1544847558-3ccacb31ee7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  }
]

export const CarouselHome = () => {
  SwiperCore.use([Autoplay])
  return (
    <section className="w-100">
      <Swiper spaceBetween={20} slidesPerView={1} autoplay={{delay: 3000}}>
        {
          previewData.map(x => <SwiperSlide key={x.id} ><CarouselInternal id={x.id} title={x.title} subtitle={x.subtitle} linkToArticle={x.linkToArticle} imageURL={x.imageURL} /></SwiperSlide>)
        }
      </Swiper>
    </section>
  )
}
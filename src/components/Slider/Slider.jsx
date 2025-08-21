import { useRef } from 'react'
import { Link } from 'react-router-dom'
import MovieCard from '../MovieCard/MovieCard'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
// Import required modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

const Slider = ({ title, items, type = 'movie' }) => {
  return (
    <div className="space-y-4 px-2">
      <h2 className="text-3xl font-bold ">{title}</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        className="mySwiper"
      >
        {items?.map(item => (
          <SwiperSlide key={item.id}>
            <Link to={`/${type}/${item.id}`}>
              <MovieCard movie={item} />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Slider
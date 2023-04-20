import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets2/avatar01.jpg'
import AVTR2 from '../../assets2/avatar02.jpeg'
import AVTR3 from '../../assets2/avatar03.jpeg'
import AVTR4 from '../../assets2/avatar04.jpeg'

// import Swiper core and required modules
import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    name: 'Jane Doe',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quod est natus non voluptatibus earum pariatur? Ratione aliquid corporis, maiores mollitia at dolore. Porro placeat vitae expedita sed incidunt nam.'
  },
  {
    avatar: AVTR2,
    name: 'Muhammed Doe',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quod est natus non voluptatibus earum pariatur? Ratione aliquid corporis, maiores mollitia at dolore. Porro placeat vitae expedita sed incidunt nam.'
  },
  {
    avatar: AVTR3,
    name: 'John Doe',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quod est natus non voluptatibus earum pariatur? Ratione aliquid corporis, maiores mollitia at dolore. Porro placeat vitae expedita sed incidunt nam.'
  },
  {
    avatar: AVTR4,
    name: 'Cynthia Doe',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quod est natus non voluptatibus earum pariatur? Ratione aliquid corporis, maiores mollitia at dolore. Porro placeat vitae expedita sed incidunt nam.'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) =>{
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt="Avatars" />
                </div>
                <h5 className="client__name">{name}</h5>
                <small className="client__review">{review}</small>
              </SwiperSlide>
              )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials
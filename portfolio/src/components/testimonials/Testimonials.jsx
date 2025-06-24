import React from 'react'
import "./Testimonials.css"
import { Data } from './Data'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const Testimonials = () => {
  return (
    <section className="Testimonials container section">
        <h2 className="section__title">My Clients says</h2>
        <span className="section_subtitle">Testimonial</span>

        <Swiper className="testimonial__container"
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        }}
        modules={[Pagination]}
        >
            {Data.map(({id,image,title,description})=>{
                return (
                    <SwiperSlide className="testimonial__card" key={id}>
                        <img src={image} className='testimonial__img' alt="" />

                        <h3 className="testimonial_name">{title}</h3>
                        <p className="tesimonial__description">{description}</p>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    </section>
  )
}

export default Testimonials
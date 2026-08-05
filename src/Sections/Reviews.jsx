import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { Zoom } from "react-awesome-reveal";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Title from '../Components/Title';

const data = [
  {
    name: 'Brian Mwangi',
    review: 'Excellent developer with strong attention to detail and a commitment to delivering high-quality solutions.'
  },
  {
    name: 'Grace Chebet',
    review: 'A dependable software developer who consistently produces quality work and meets deadlines.'
  }
]

const Reviews = () => {
  return (
    <section id="reviews" className="py-15 relative overflow-hidden">
      
      <Title subtitle='Client Reviews' title='Reviews' />

        <div className="w-11/12 sm:w-4/5 md:w-3/5 lg:w-2/5 mx-auto pb-7 mt-15">
          <Swiper
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            spaceBetween={40}
            slidesPerView={1}
            navigation={{ clickable: true }}
            pagination={{ clickable: true }}
            mousewheel={true}
            keyboard={true}
          >
            {data.map(({ name, review }, index) => (
              <SwiperSlide key={index}>
                <div className="text-gray-500 text-center p-8 rounded-3xl select-none">
                  <h5 className="font-semibold text-base mb-1">{name}</h5>
                  <small className="text-[var(--color-light)] font-light block w-4/5 mx-auto mt-3 leading-relaxed">
                    {review}
                  </small>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
    </section>
  )
}

export default Reviews;
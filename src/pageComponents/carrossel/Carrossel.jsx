import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import Image from "next/image"
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import VolvoXc40 from "../../../public/foto-5.jpg"
import VolvoXc60 from "../../../public/foto-4.jpg"
import Corolla from "../../../public/foto-3.jpg"
import Area from '../comum/Area';

export default class Carrossel extends React.Component{
  render(){
    return(
      <Area>
      <div className='bg-white justify-center flex pb-10 pl-10 pr-10'>
      <Swiper
        spaceBetween={30}
        
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper "
      >
        <SwiperSlide>
        <Image
        src={VolvoXc60}
        alt='VolvoXC60'
        />
        </SwiperSlide>
        <SwiperSlide>
        <Image
        src={VolvoXc40}
        alt='VolvoXC40'
        />
        </SwiperSlide>
        <SwiperSlide>
        <Image
        src={Corolla}
        alt='Corolla'
        />
        </SwiperSlide>
      </Swiper>
      </div>
      </Area>
    )
  }
}
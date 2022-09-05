import { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/navigation";
import "./MainSlider.scss"

import { Navigation } from "swiper";
import MainSliderItem from "./mainSliderItem/MainSliderItem";
import Goods01 from "../../resources/img/goods-01.jpg";
import Goods02 from "../../resources/img/goods-02.jpg";
import Goods03 from "../../resources/img/goods-03.jpg";
import Arrow from "../../resources/svg/arrow.svg";

const MainSlider = () => {

  const data = [
    {id: 1, name: "PowerShot SX620 HS", manufacturer: "Canon", img: Goods01, prices: [
      {label: "Будний", price: 630},
      {label: "Выходной", price: 750},
      {label: "Неделя", price: 4380},
      {label: "Месяц", price: 12500},
    ]},
    {id: 2, name: "PowerShot SX620 HS", manufacturer: "Canon", img: Goods02, prices: [
      {label: "Будний", price: 630},
      {label: "Выходной", price: 750},
      {label: "Неделя", price: 4380},
      {label: "Месяц", price: 12500},
    ]},
    {id: 3, name: "PowerShot SX620 HS", manufacturer: "Canon", img: Goods03, prices: [
      {label: "Будний", price: 630},
      {label: "Выходной", price: 750},
      {label: "Неделя", price: 4380},
      {label: "Месяц", price: 12500},
    ]},
    {id: 4, name: "PowerShot SX620 HS", manufacturer: "Canon", img: Goods01, prices: [
      {label: "Будний", price: 630},
      {label: "Выходной", price: 750},
      {label: "Неделя", price: 4380},
      {label: "Месяц", price: 12500},
    ]},
    {id: 5, name: "PowerShot SX620 HS", manufacturer: "Canon", img: Goods01, prices: [
      {label: "Будний", price: 630},
      {label: "Выходной", price: 750},
      {label: "Неделя", price: 4380},
      {label: "Месяц", price: 12500},
    ]},
    {id: 6, name: "PowerShot SX620 HS", manufacturer: "Canon", img: Goods01, prices: [
      {label: "Будний", price: 630},
      {label: "Выходной", price: 750},
      {label: "Неделя", price: 4380},
      {label: "Месяц", price: 12500},
    ]},
  ]

  const navigationPrevRef = useRef(null)
  const navigationNextRef = useRef(null)

  const slides = data.map(item => {
    const {id, ...otherProps} = item;
    return (
      <SwiperSlide key={id} className="goods-slider__item">
        <MainSliderItem {...otherProps}/>
      </SwiperSlide>
      
    )
  })

  return (
    <section className="goods">
      <h2 className="goods-title title"><span>Популярные</span> товары</h2>
      <div className="goods-container">
        <Swiper 
          modules={[Navigation]} 
          slidesPerView={3}
          slidesPerGroup={3}
          loop={true}
          navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
          }}
          onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = navigationPrevRef.current;
                swiper.params.navigation.nextEl = navigationNextRef.current;
          }}
          breakpoints={{
            960: {
              minwidth: 1150,
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 22
            },
            660: {
              minwidth: 960,
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 30
            },
            0: {
              minwidth: 660,
              slidesPerView: 1,
              slidesPerGroup: 1,
              spaceBetween: 20
            },
          }}
          className="goods-slider">
          {slides}
          <div className="swiper-button-prev" ref={navigationPrevRef}>
            <img src={Arrow} alt="arrow" />
          </div>
          <div className="swiper-button-next" ref={navigationNextRef}>
            <img src={Arrow} alt="arrow" />
          </div>
        </Swiper>
      </div>
    </section>
  )
}

export default MainSlider;
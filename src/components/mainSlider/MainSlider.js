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

  const items = data.map(item => {
    const {id, ...otherProps} = item;
    return (
      <SwiperSlide key={id}>
        <MainSliderItem {...otherProps}/>
      </SwiperSlide>
      
    )
  })

  return (
    <section className="goods">
      <h2 className="goods-title title"><span>Популярные</span> товары</h2>
      <div className="goods-container">
        <Swiper 
          slidesPerView={3}
          navigation={true} 
          slidesPerGroup={3}
          loop={true}
          modules={[Navigation]} 
          className="goods-slider">
          {items}
        </Swiper>
      </div>
    </section>
  )
}

export default MainSlider;
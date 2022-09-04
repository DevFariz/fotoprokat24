import "./IntroInfo.scss";

import Info01 from "../../resources/svg/info-01.svg";
import Info02 from "../../resources/svg/info-02.svg";
import Info03 from "../../resources/svg/info-03.svg";
import Info04 from "../../resources/svg/info-04.svg";
import Info05 from "../../resources/svg/info-05.svg";

const IntroInfo = () => {
  const data = [
    {img: Info01, label: "Самый большой выбор техники"},
    {img: Info02, label: "Быстрое оформление заказа"},
    {img: Info03, label: "Можно забрать заказ в пункте выдачи"},
    {img: Info04, label: "Доставка в любую точку Москвы"},
    {img: Info05, label: "Оплата картой и наличными"},
  ];

  const items = data.map((item, i) => {

    return (
      <div key={i} className="intro-info__item">
          <img src={item.img} alt={item.label} className="intro-info__img" />
          <p className="intro-info__text">{item.label}</p>
      </div>
    )
  })

  return (
    <div className="intro-info">
      <div className="container">
        <div className="intro-info-container">
          {items}
        </div>
      </div>
    </div>
  )

}

export default IntroInfo;
import "./EarnWithUs.scss"; 

import Earn01 from "../../resources/svg/earn-01.svg";
import Earn02 from "../../resources/svg/earn-02.svg";
import Earn03 from "../../resources/svg/earn-03.svg";
import Earn04 from "../../resources/svg/earn-04.svg";

function EarnWithUs() {

  const data = [
    {label: "Доступный способ инвестировать", img: Earn01},
    {label: "Постоянный стабильный доход", img: Earn02},
    {label: "Гарантии сохранности техники", img: Earn03},
    {label: "Прозрачные выплаты", img: Earn04},
  ]

  const items = data.map(({label, img}, i) => {
    return (
      <div key={i} className="earn-with-us-item">
        <p className="earn-with-us-item__text">{label}</p>
        <img src={img} alt={label} />
      </div>
    )
  })

  return (
    <section className="earn-with-us">
      <div className="container">
        <h2 className="earn-with-us__title title">
          <span>Зарабатывайте</span> вместе с нами
        </h2>
        <p className="text earn-with-us__text">
          Сдавайте свою технику через наш сервис, разместив её в каталоге, и получайте стабильную прибыль.
        </p>
        <div className="earn-with-us-items">
          {items}
        </div>
        <div className="earn-with-us__btn-container"> 
          <button className="earn-with-us__btn green-btn">Предложить свою технику</button>
        </div>
      </div>
    </section>
  );
}

export default EarnWithUs;
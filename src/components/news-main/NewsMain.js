import "./NewsMain.scss";

import NewsMain01 from "../../resources/img/news-main-01.jpg";
import NewsMain02 from "../../resources/img/news-main-02.jpg";
import NewsMain03 from "../../resources/img/news-main-03.jpg";

function NewsMain() {

  const data = [
    {id: 1, date: "7 апреля 2019", title: "Выбираем SD-карты для съемки", description: "За исключением отсутствующей системы аэродинамического охлаждения, корпус этого ноутбука почти такой же.", img: NewsMain01},
    {id: 2, date: "20 мая 2019", title: "Что представила Photokina", description: "Ноутбук Zephyrus S (GX502) весит 2 кг, а корпус толщиной всего 18,9 мм позволяет легко уместить его в обычный рюкзак.", img: NewsMain02},
    {id: 3, date: "14 июня 2019", title: "Новинка goPro Hero 5", description: "Специальные «легкие» версии приложений для Android GO и отсутствие некоторых предустановленных программ.", img: NewsMain03},
  ];

  const items = data.map(({id, date, title, description, img}, i) => {

    const clazz = i % 2 === 1 ? "news-main__content-top" : "news-main__content-bottom";

    return (
        <div key={id} className={`${clazz} news-main__content-item`}>
          <div className="news-main__content">
            <p className="news-main__content-date">{date}</p>
            <h3 className="news-main__content-title">{title}</h3>
            <p className="news-main__content-description text">{description}</p>
          </div>
          <img src={img} alt={title} className="new-main__img" />
        </div>
    )
  })

  return (
    <section className="news-main">
      <div className="container">
        <h2 className="news-main__title title">
          <span>Новости</span> компании
        </h2>
        <div className="news-main-container">
          {items}
        </div>
        <div className="news-main__btn-container">
          <button className="green-btn news-main__btn">Все новости</button>
        </div>
      </div>
    </section>
  );
}

export default NewsMain;
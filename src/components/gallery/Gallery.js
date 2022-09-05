import "./Gallery.scss";

import Gallery01 from "../../resources/img/gallery-01.jpg";
import Gallery02 from "../../resources/img/gallery-02.jpg";
import Gallery03 from "../../resources/img/gallery-03.jpg";
import Gallery04 from "../../resources/img/gallery-04.jpg";
import Gallery05 from "../../resources/img/gallery-05.jpg";

function Gallery() {
  const data= [
    {img: Gallery01, text1: "Фотокамеры Canon", text2: "от 3000 рублей"},
    {img: Gallery02, text1: "Видеокамеры", text2: "по 200 рублей в сутки"},
    {img: Gallery03, text1: "Товар недели", text2: "всего за 4000 рублей"},
    {img: Gallery04, text1: "всего за 4000 рублей", text2: "по 700 рублей"},
    {img: Gallery05, text1: "Отличные фотокамеры", text2: "за 1500 рублей"}
  ];

  const items = data.map(({img, text1, text2}, i) => {
    return (
      <div key={i} className="gallery-item">
        <img src={img} alt={`${text1} ${text2}`} className="gallery-bg" />
        <div>
          <span className="gallery-text text-bg">
            <span>{text1}</span> 
          </span> <br />
          <span className="gallery-text text-bg">
            <span>{text2}</span> 
          </span>
        </div>
      </div>
    )
  })

  return (
    <section className="gallery">
      <div className="container">
        <div className="gallery-container">
          {items}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
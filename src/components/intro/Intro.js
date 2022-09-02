import "./Intro.scss";

const Intro = () => {
  return (
    <section className="intro">
      <div className="container">
        <div className="intro-container">
          <div>
            <span className="intro-text text-bg">
              <span>Аренда</span> Фото
            </span> <br />
            <span className="intro-text text-bg">
              И видео
            </span> <br />
            <span className="intro-text text-bg intro-text-green">
              оборудования
            </span>  
          </div>
        </div>
      </div>
    </section>
  )
}

export default Intro;
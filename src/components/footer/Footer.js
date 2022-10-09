import "./Footer.scss";

import messageImg from "../../resources/svg/message.svg";
import PhoneCallImg from "../../resources/svg/phone-call.svg";
import { FiFacebook } from "react-icons/fi";
import { RiTwitterLine } from "react-icons/ri";
import { TbBrandYoutube } from "react-icons/tb";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-top-container">
            <div className="footer-top-left">
              <img src={messageImg} alt="message" />
              <p>
                Подпишитесь <br />
                <span>на новости и акции</span>
              </p>
            </div>
            <div className="footer-top-center">
              <input
                placeholder="Введите e-mail"
                type="mail"
                className="footer-top__input"
              />
              <button>Подписаться</button>
            </div>
            <div className="footer-top-right">
              <img
                src={PhoneCallImg}
                alt="phone call"
                className="footer-top-right__img"
              />
              <a
                className="footer-top-right__link"
                href="tel: +999999999999999"
              >
                Заказать звонок
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-container">
            <div className="footer-bottom__contacts">
              <div className="footer-logo">
                fotoprokat <span>24</span>
              </div>
              <p className="footer-bottom__text">
                самый удобный в Москве сервис аренды фото-,видео- и кинотехники.
              </p>
              <p className="footer-bottom__text">
                © <span>2015-2019</span> Fotoprokat24
              </p>
              <ul className="footer-socials">
                <li className="footer-social">
                  <a
                    href="#a"
                    className="footer-social__link footer-social__link_facebook"
                  >
                    <FiFacebook style={{ width: "18px", height: "18px" }} />
                  </a>
                </li>
                <li className="footer-social">
                  <a
                    href="#a"
                    className="footer-social__link footer-social__link_twitter"
                  >
                    <RiTwitterLine style={{ width: "18px", height: "18px" }} />
                  </a>
                </li>
                <li className="footer-social">
                  <a
                    href="#a"
                    className="footer-social__link footer-social__link_youtube"
                  >
                    <TbBrandYoutube style={{ width: "18px", height: "18px" }} />
                  </a>
                </li>
                <li className="footer-social">
                  <a
                    href="#a"
                    className="footer-social__link footer-social__link_instagram"
                  >
                    <FaInstagram style={{ width: "18px", height: "18px" }} />
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-bottom-items">
              <h5 className="footer-bottom-items__title">Компания</h5>
              <ul>
                <li>
                  <a href="#a">О компании</a>
                </li>
                <li>
                  <a href="#a">Новости</a>
                </li>
                <li>
                  <a href="#a">Вакансии</a>
                </li>
                <li>
                  <a href="#a">Политика конфиденчиальности</a>
                </li>
              </ul>
            </div>
            <div className="footer-bottom-items">
              <h5 className="footer-bottom-items__title">Клиентам</h5>
              <ul>
                <li>
                  <a href="#a">Точки выдачи</a>
                </li>
                <li>
                  <a href="#a">Скидки</a>
                </li>
                <li>
                  <a href="#a">Бонусные программы</a>
                </li>
              </ul>
            </div>
            <div className="footer-bottom-items">
              <h5 className="footer-bottom-items__title">Помощь</h5>
              <ul>
                <li>
                  <a href="#a">Вопрос-ответ</a>
                </li>
                <li>
                  <a href="#a">Правила аренды</a>
                </li>
                <li>
                  <a href="#a">Доставка</a>
                </li>
                <li>
                  <a href="#a">Оплата</a>
                </li>
              </ul>
            </div>
            <address className="footer-bottom-items">
              <h5 className="footer-bottom-items__title">Контакты</h5>
              <ul>
                <li>Fotoprokat24</li>
                <li>г. Москва, Пропект мира, дом 12</li>
                <li>Пн-Вс 9:00 - 21:00</li>
                <li>+7 (999) 999-99-99</li>
              </ul>
            </address>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

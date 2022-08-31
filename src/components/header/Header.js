

import "./Header.scss";

import Compare from "../../resources/svg/compare.svg";
import Profile from "../../resources/svg/profile.svg";
import Cart from "../../resources/svg/shopping-cart.svg";
import Seacrh from "../../resources/svg/search.svg";
import Star from "../../resources/svg/star.svg";

const Header = () => {

  return (
    <header className="header">
      <div className="container-bg">
        <div className="header-container">
          <h1 className="logo">
            fotoprokat <span>24</span>
          </h1>
          <nav className="nav">
            <ul className="menu">
              <li className="menu__item">
                <a href="#j" className="menu__link">Каталог</a>
              </li>
              <li className="menu__item">
                <a href="#j" className="menu__link">О компании</a>
              </li>
              <li className="menu__item">
                <a href="#j" className="menu__link">Правила</a>
              </li>
              <li className="menu__item">
                <a href="#j" className="menu__link">Новости</a>
              </li>
              <li className="menu__item">
                <a href="#j" className="menu__link">Контакты</a>
              </li>
            </ul>
          </nav>
          <div className="user-interaction">
            <button name="star" className="user-starred header-btn">
              <img src={Star} alt="starred" />
            </button>
            <button name="compare" className="user-compare header-btn">
              <img src={Compare} alt="compare" />
            </button>
            <button name="cart" className="user-cart header-btn">
              <img src={Cart} alt="cart" />
            </button>
            <button name="search" className="user-search header-btn">
              <img src={Seacrh} alt="search" />
            </button>
            <button name="profile" className="user-profile header-btn">
              <img src={Profile} alt="profile" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;
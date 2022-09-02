import { useState, useEffect, useCallback } from "react";
import "./Header.scss";

import Compare from "../../resources/svg/compare.svg";
import Profile from "../../resources/svg/profile.svg";
import Cart from "../../resources/svg/shopping-cart.svg";
import Seacrh from "../../resources/svg/search.svg";
import Star from "../../resources/svg/star.svg";

const Header = () => {

  const [width, setWidth] = useState(window.innerWidth);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [toggleSearch, setToggleSearch] = useState(false);
  const [inputText, setInputText] = useState('');

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return _ => {
      window.removeEventListener('resize', handleResize)
    }
  })

  function Burger() {
    const toggleBurger = () => {
      setMobileMenu(!mobileMenu)
    }

    return(
      <button className={`burger ${mobileMenu ? "active" : null}`} onClick={toggleBurger}>
        <span className="burger__line"></span>
        <span className="burger__line"></span>
        <span className="burger__line"></span>
      </button>
    )
  }

  return (
    <header className="header">
      <div className="container-bg">
        <div className="header-container">
          {width <= 840 ? <BtnsLeft /> : null}
          <h1 className="logo">
            {width > 960 ? "fotoprokat" : "fp"} <span>24</span>
          </h1>
          <nav className={`nav ${mobileMenu ? "active" : ""}`}>
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
            {width > 840 ? <BtnsLeft /> : null}
            <BtnsRight toggleSearch={toggleSearch} setToggleSearch={setToggleSearch}/>
            {width <=840 ? <Burger /> : null}
          </div>
          
        </div>
      </div>
      <label 
          htmlFor="header-inp" 
          className={`inp-block ${toggleSearch ? "active" : ""}`}>
          <div className="inp-block-container">
            <input 
              id="header-inp" 
              placeholder="Начните поиск" 
              type="text" 
              className="header-input"
              onChange={(e) => setInputText(e.target.value)}
              value={inputText}
              />
            <button>Найти</button>
          </div>
      </label>
    </header>
  )
}

function BtnsLeft() {
  return (
    <div>
      <button name="star" className="user-starred header-btn">
        <img src={Star} alt="starred" />
      </button>
      <button name="compare" className="user-compare header-btn">
        <img src={Compare} alt="compare" />
      </button>
      <button name="cart" className="user-cart header-btn">
        <img src={Cart} alt="cart" />
      </button>
    </div>
  )
}

function BtnsRight({toggleSearch, setToggleSearch}) {
  
  return (
    <div>
      <button onClick={() => setToggleSearch(!toggleSearch)} name="search" className="user-search header-btn">
        <img src={Seacrh} alt="search" />
      </button>
      <button name="profile" className="user-profile header-btn">
        <img src={Profile} alt="profile" />
      </button>
    </div>
  )
}

export default Header;
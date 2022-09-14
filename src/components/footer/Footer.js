import './Footer.scss';

import messageImg from '../../resources/svg/message.svg';
import PhoneCallImg from '../../resources/svg/phone-call.svg';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="container">
        <div className="footer-top">
          <div className="footer-top-container">
            <div className="footer-top-left">
              <img src={messageImg} alt="message" />
              <p>
                Подпишитесь <br />
                <span>на новости и акции</span>
              </p>
            </div>
            <div className="footer-top-center">
              <input placeholder='Введите e-mail' type='mail' className="footer-top__input" />
              <button>Подписаться</button>
            </div>
            <div className="footer-top-right">
              <img src={PhoneCallImg} alt="phone call" className='footer-top-right__img'/>
              <a className='footer-top-right__link' href="tel: +999999999999999">Заказать звонок</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
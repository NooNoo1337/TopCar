import React, {Component} from 'react';

import ContentWrapper from '../../components/ContentWrapper';
import SecondTitle from '../../components/SecondTitle';
import GoogleMap from '../../components/GoogleMap';
import './Contacts.scss';

export default class Contacts extends Component {
  render() {
    return (
      <section className="contacts" id="contacts">
        <ContentWrapper classes="contacts__wrapper">
          <SecondTitle classes="contacts__title">Контакты</SecondTitle>
          <ContactsList />
        </ContentWrapper>
        <GoogleMap />
      </section>
    );
  }
}


function ContactsList() {
  return (
    <ul className="contacts__list">
      <li className="contacts__item contacts__item--icon">
        <svg className="contacts__icon" width="30" height="30" viewBox="0 0 381 381" aria-hidden="true">
          <path d="M206.025 75.32c-26.51.021-47.983 21.528-47.962 48.038a47.998 47.998 0 0 0 48.038 47.962c26.51-.021 47.983-21.528 47.962-48.038-.022-26.509-21.529-47.983-48.038-47.962zm25.915 73.694c-14.253 14.271-37.376 14.286-51.647.033A36.518 36.518 0 0 1 169.58 123.2a36.401 36.401 0 0 1 10.68-25.8c14.253-14.271 37.376-14.286 51.647-.033s14.286 37.376.033 51.647zM233.18 185.64h-54.16c-35.346 0-64 28.654-64 64v36.68a5.8 5.8 0 0 0 5.8 5.8h170.56a5.8 5.8 0 0 0 5.8-5.8v-36.68c0-35.346-28.654-64-64-64zm52.4 94.92H126.66v-30.92c.088-28.903 23.497-52.312 52.4-52.4h54.12c28.903.088 52.312 23.497 52.4 52.4v30.92z" fill="#FFF"/><path d="M356.26 7.48A25.402 25.402 0 0 0 338.3 0H73.94C59.877.022 48.482 11.417 48.46 25.48v32.4h-9.8c-12.053.022-21.818 9.787-21.84 21.84v1.44c.022 12.053 9.787 21.818 21.84 21.84h9.72v64.92h-9.72c-12.053.022-21.818 9.787-21.84 21.84v1.44c.022 12.053 9.787 21.818 21.84 21.84h9.72v64.92h-9.72c-12.053.022-21.818 9.787-21.84 21.84v1.44c0 12.068 9.772 21.858 21.84 21.88h9.72v32a25.402 25.402 0 0 0 7.48 17.96 25.402 25.402 0 0 0 17.96 7.48h264.44c14.063-.022 25.458-11.417 25.48-25.48V25.44a25.357 25.357 0 0 0-7.48-17.96zM38.66 91c-5.434 0-9.84-4.406-9.84-9.84v-1.44c-.022-5.434 4.365-9.858 9.8-9.88H69.1c5.435 0 9.84 4.406 9.84 9.84v1.44c0 5.435-4.406 9.84-9.84 9.84L38.66 91zm0 110.08c-5.434 0-9.84-4.406-9.84-9.84v-1.44c-.022-5.434 4.365-9.858 9.8-9.88H69.1c5.435 0 9.84 4.406 9.84 9.84v1.44c0 5.434-4.406 9.84-9.84 9.84l-30.44.04zm0 110.04c-5.434 0-9.84-4.406-9.84-9.84v-1.44c-.022-5.434 4.365-9.858 9.8-9.88H69.1c5.435 0 9.84 4.406 9.84 9.84v1.44c0 5.435-4.406 9.84-9.84 9.84l-30.44.04zm313.4 44c-.044 7.648-6.232 13.836-13.88 13.88H73.94a13.84 13.84 0 0 1-9.8-4 13.84 13.84 0 0 1-4-9.8v-32h9.16c12.053-.022 21.818-9.787 21.84-21.84v-1.44c-.022-12.053-9.787-21.818-21.84-21.84h-9.28v-65.04h9.16c12.053-.022 21.818-9.787 21.84-21.84v-1.44c-.022-12.053-9.787-21.818-21.84-21.84h-9.16V103h9.16c12.053-.022 21.818-9.787 21.84-21.84v-1.44c-.022-12.053-9.787-21.818-21.84-21.84h-9.16v-32.4c.044-7.648 6.232-13.836 13.88-13.88h264.36c7.657.022 13.858 6.223 13.88 13.88l-.08 329.64z" fill="#FFF"/>
        </svg>
      </li>
      <li className="contacts__item">
        <p className="contacts__item-title">
          Адрес
        </p>
        <p className="contacts__item-text">
          1-я Бородинская ул., 2A, Москва, 121059
        </p>
      </li>

      <li className="contacts__item">
        <p className="contacts__item-title">
          Телефон
        </p>
        <a className="contacts__item-text" href="tel:+79853551010">
          +7 (985) 355-10-10
        </a>
      </li>

      <li className="contacts__item">
        <p className="contacts__item-title">
          Почта
        </p>
        <a className="contacts__item-text" href="mailto:topcarcleaning@yandex.ru">
          topcarcleaning@yandex.ru
        </a>
      </li>

      <li className="contacts__item">
        <p className="contacts__item-title">
          Instagram
        </p>
        <a className="contacts__item-text" href="https://www.instagram.com/topcar_cleaning24/">
          @topcar_cleaning24
        </a>
      </li>
    </ul>
  );
}

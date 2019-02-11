import React, {Component} from 'react';

import ContentWrapper from "../../components/ContentWrapper";

import './Footer.scss';

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer" role="contentinfo">
        <ContentWrapper classes="footer__wrapper">
          <FooterNav />
          <FooterAdditionalInfo />
        </ContentWrapper>
      </footer>
    );
  }
}

function FooterNav() {
  return(
    <div className="footer__nav">

      <ul className="footer__list">
        <li className="footer__item footer__item--title">
          Разделы
        </li>

        <li className="footer__item">
          <a href="/" className="footer__link">
            Главная
          </a>
        </li>

        <li className="footer__item">
          <a href="" className="footer__link">
            Услуги
          </a>
        </li>
        <li className="footer__item">
          <a href="" className="footer__link">
            Акции
          </a>
        </li>
        <li className="footer__item">
          <a href="" className="footer__link">
            Контакты
          </a>
        </li>
      </ul>

      <ul className="footer__list">
        <li className="footer__item footer__item--title">
          Контакты
        </li>
        <li className="footer__item">
          <p className="footer__text">
            1-я Бородинская ул., <br/>2A, Москва, 121059
          </p>
        </li>
        <li className="footer__item">
          <a className="footer__link" href="tel:+79853551010">+7 (985) 355-10-10</a>
        </li>
        <li className="footer__item">
          <a className="footer__link" href="mailto:topcarcleaning@yandex.ru">topcarcleaning@yandex.ru</a>
        </li>
      </ul>

      <ul className="footer__list">
        <li className="footer__item footer__item--title">
          Работаем
        </li>
        <li className="footer__item">
          <p className="footer__text">
            Ежедневно, 24 часа
          </p>
        </li>
      </ul>

      <ul className="footer__list">
        <li className="footer__item footer__item--title">
          Соц. сети
        </li>
        <li className="footer__item">
          <a href="https://www.instagram.com/topcar_cleaning24/" className="footer__link footer__link--no-effect" target="_blank">
            <span className="visually-hidden">Ссылка на Instagram</span>
            <svg className="footer__icon" width="20" height="20" viewBox="0 0 512 512">
              <path d="M373.659 0H138.341C62.06 0 0 62.06 0 138.341v235.318C0 449.94 62.06 512 138.341 512h235.318C449.94 512 512 449.94 512 373.659V138.341C512 62.06 449.94 0 373.659 0zm96.977 373.659c0 53.473-43.503 96.977-96.977 96.977H138.341c-53.473 0-96.977-43.503-96.977-96.977V138.341c0-53.473 43.503-96.977 96.977-96.977h235.318c53.473 0 96.977 43.503 96.977 96.977v235.318z"/><path d="M370.586 238.141c-3.64-24.547-14.839-46.795-32.386-64.342-17.547-17.546-39.795-28.746-64.341-32.385a114.73 114.73 0 0 0-33.682 0c-30.336 4.499-57.103 20.541-75.372 45.172-18.269 24.631-25.854 54.903-21.355 85.237 4.499 30.335 20.541 57.102 45.172 75.372 19.996 14.831 43.706 22.619 68.153 22.619 5.667 0 11.375-.418 17.083-1.265 30.336-4.499 57.103-20.541 75.372-45.172 18.27-24.63 25.855-54.901 21.356-85.236zm-102.795 89.491c-19.405 2.882-38.77-1.973-54.527-13.66-15.757-11.687-26.019-28.811-28.896-48.216-2.878-19.405 1.973-38.77 13.66-54.527 11.688-15.757 28.811-26.019 48.217-28.897a73.42 73.42 0 0 1 21.545.001c32.231 4.779 57.098 29.645 61.878 61.877 5.94 40.058-21.817 77.482-61.877 83.422zm132.258-215.681a20.83 20.83 0 0 0-14.625-6.058 20.826 20.826 0 0 0-14.625 6.058 20.814 20.814 0 0 0-6.058 14.625 20.814 20.814 0 0 0 6.058 14.625 20.83 20.83 0 0 0 14.625 6.058 20.826 20.826 0 0 0 14.625-6.058 20.83 20.83 0 0 0 6.058-14.625 20.826 20.826 0 0 0-6.058-14.625z"/>
            </svg>
          </a>
        </li>
      </ul>
    </div>
  );
}

function FooterAdditionalInfo() {
  return(
    <div className="footer__additional-info">
      <p className="footer__copyright">
        Copyright © 2018 TopCar-Cleaning
      </p>
      <p className="footer__designed-by">
        Designed by <a className="footer__link">Mikhail Rerberg</a>
      </p>
    </div>
  );
}
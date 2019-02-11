import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link, NavLink} from "react-router-dom";

import ContentWrapper from "../../components/ContentWrapper";

import './Header.scss';

export default class Header extends Component {
  state = {
    mobileMenuOpened: false,
    isDropListOpened: false
  };

  render() {
    return (
      <header className="header">
        <ContentWrapper classes="header__wrapper">
          <HamburgerButton openMobileMenu={this.state.mobileMenuOpened}
                           handleClick={this.handleMenuButtonClick.bind(this)}/>
          <HeaderNavigation showNavigation={this.state.mobileMenuOpened} showDropList={this.state.isDropListOpened}
                            handleClick={this.handleOfferLinkClick.bind(this)}/>
          <HeaderContactsLinks/>
        </ContentWrapper>
      </header>
    );
  }

  handleMenuButtonClick = () => {
    document.querySelector('body').classList.toggle('fixed');

    this.setState({
      mobileMenuOpened: !this.state.mobileMenuOpened
    });
  };

  handleOfferLinkClick = () => {
    this.setState({
      isDropListOpened: !this.state.isDropListOpened
    });
  };
}

function HamburgerButton(props) {
  return (
    <button className={props.openMobileMenu ? 'header__menu-button is-active' : 'header__menu-button'}
            onClick={props.handleClick}>
      <span>{props.openMobileMenu ? 'Закрыть мобильное меню' : 'Открыть мобильное меню'}</span>
    </button>
  );
}

function HeaderNavigation(props) {
  return (
    <nav className={props.showNavigation ? 'header__nav header__nav--opened' : 'header__nav'} role="navigation">

      <ul className="header__list">
        <li className="header__item">
          <NavLink to="/main" className="header__link" activeClassName="header__link--active">Главная</NavLink>
        </li>

        <li className="header__item header__item--drop">
          {/*<NavLink to="/offers" className="header__link" activeClassName="header__link--active" onClick={props.handleClick}>Услуги</NavLink>*/}
          <p className='header__link header__link--arrow' onClick={props.handleClick}>
            Услуги
            <span>
              <svg className = {props.showDropList ? 'down-arrow reversed' : 'down-arrow'} viewBox="0 0 477 477" width="15" height="15">
                <path d="M360.731 229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1 0s-5.3 13.8 0 19.1l215.5 215.5-215.5 215.5c-5.3 5.3-5.3 13.8 0 19.1 2.6 2.6 6.1 4 9.5 4 3.4 0 6.9-1.3 9.5-4l225.1-225.1c5.3-5.2 5.3-13.8.1-19z"/>
              </svg>
            </span>
          </p>
          <HeaderOfferList showList={props.showDropList}/>
        </li>

        <li className="header__item">
          <NavLink to="/promotions" className="header__link" activeClassName="header__link--active">Акции</NavLink>
        </li>

        <li className="header__item">
          <NavLink to="/contacts" className="header__link" activeClassName="header__link--active">Контакты</NavLink>
        </li>
      </ul>
    </nav>
  );
}

function HeaderContactsLinks() {
  return (
    <div className="header__contact-links">
      <a className="header__link header__link--phone" href="tel:+79853551010">
        <span className="text">+7 (985) 355-10-10</span>
        <svg className="header__icon header__icon--phone" viewBox="0 0 30 30" width="30" height="30">
          <path
            d="M23.895 29.731c-1.237 0-2.731-.31-4.374-.93-3.602-1.358-7.521-4.042-11.035-7.556C4.971 17.73 2.287 13.81.928 10.208-.307 6.933-.31 4.245.921 3.015c.177-.177.357-.367.543-.563C2.587 1.271 3.856-.058 5.538.002 6.697.05 7.82.77 8.97 2.201c3.398 4.226 1.866 5.732.093 7.478l-.313.31c-.29.29-.838 1.633 4.26 6.731 1.664 1.664 3.083 2.882 4.217 3.619.714.464 1.991 1.166 2.515.642l.315-.318c1.744-1.769 3.25-3.296 7.473.099 1.431 1.15 2.15 2.272 2.198 3.433.069 1.681-1.27 2.953-2.452 4.075-.195.186-.385.366-.562.542-.611.612-1.588.919-2.819.919zM5.418 1C4.223 1 3.144 2.136 2.189 3.141c-.192.202-.378.398-.561.581-.917.916-.824 3.323.236 6.134 1.31 3.472 3.913 7.266 7.33 10.683 3.416 3.415 7.208 6.018 10.681 7.327 2.811 1.062 5.218 1.152 6.133.237.183-.183.379-.369.581-.56 1.027-.976 2.192-2.082 2.141-3.309-.035-.843-.649-1.75-1.825-2.695-3.519-2.83-4.503-1.831-6.135-.176l-.32.323c-.78.781-2.047.608-3.767-.51-1.193-.776-2.667-2.038-4.379-3.751-4.231-4.23-5.584-6.819-4.26-8.146l.319-.315c1.659-1.632 2.66-2.617-.171-6.138-.947-1.175-1.853-1.789-2.696-1.825L5.418 1z"
            fill="#FFF"/>
        </svg>
      </a>

      <a className="header__link" href="https://www.instagram.com/topcar_cleaning24/" target="_blank"
         rel="noopener noreferrer">
        <span className="visually-hidden">Аккаунт TopCar в Instagram</span>
        <svg className="header__icon header__icon--inst" width="30" height="30" viewBox="0 0 512 512"
             aria-hidden="true">
          <path
            d="M373.659 0H138.341C62.06 0 0 62.06 0 138.341v235.318C0 449.94 62.06 512 138.341 512h235.318C449.94 512 512 449.94 512 373.659V138.341C512 62.06 449.94 0 373.659 0zm96.977 373.659c0 53.473-43.503 96.977-96.977 96.977H138.341c-53.473 0-96.977-43.503-96.977-96.977V138.341c0-53.473 43.503-96.977 96.977-96.977h235.318c53.473 0 96.977 43.503 96.977 96.977v235.318z"/>
          <path
            d="M370.586 238.141c-3.64-24.547-14.839-46.795-32.386-64.342-17.547-17.546-39.795-28.746-64.341-32.385a114.73 114.73 0 0 0-33.682 0c-30.336 4.499-57.103 20.541-75.372 45.172-18.269 24.631-25.854 54.903-21.355 85.237 4.499 30.335 20.541 57.102 45.172 75.372 19.996 14.831 43.706 22.619 68.153 22.619 5.667 0 11.375-.418 17.083-1.265 30.336-4.499 57.103-20.541 75.372-45.172 18.27-24.63 25.855-54.901 21.356-85.236zm-102.795 89.491c-19.405 2.882-38.77-1.973-54.527-13.66-15.757-11.687-26.019-28.811-28.896-48.216-2.878-19.405 1.973-38.77 13.66-54.527 11.688-15.757 28.811-26.019 48.217-28.897a73.42 73.42 0 0 1 21.545.001c32.231 4.779 57.098 29.645 61.878 61.877 5.94 40.058-21.817 77.482-61.877 83.422zm132.258-215.681a20.83 20.83 0 0 0-14.625-6.058 20.826 20.826 0 0 0-14.625 6.058 20.814 20.814 0 0 0-6.058 14.625 20.814 20.814 0 0 0 6.058 14.625 20.83 20.83 0 0 0 14.625 6.058 20.826 20.826 0 0 0 14.625-6.058 20.83 20.83 0 0 0 6.058-14.625 20.826 20.826 0 0 0-6.058-14.625z"/>
        </svg>
      </a>
    </div>
  );
}

function HeaderOfferList(props) {
  return (
    <div className={props.showList ? 'header__drop-block header__drop-block--opened' : 'header__drop-block'}>

      <ul className="header__drop-list">
        <li>
          <Link to="/offers/cleaning" className="header__link">Мойка</Link>
        </li>

        <li>
          <Link to="/offers/dry_cleaning" className="header__link">Химчистка</Link>
        </li>

        <li>
          <Link to="/offers/polishing" className="header__link">Полировка</Link>
        </li>

        <li>
          <Link to="/offers/chrome_parts" className="header__link">Чистка + защита хромир. деталей</Link>
        </li>

        <li>
          <Link to="/offers/tire_fitting" className="header__link">Шиномонтаж</Link>
        </li>

        <li>
          <Link to="/offers/tire_storage" className="header__link">Сезонное хранение шин</Link>
        </li>

        <li>
          <Link to="/offers/tinting" className="header__link">Тонирование</Link>
        </li>

        <li>
          <Link to="/offers/freshness" className="header__link">Придание свежести салону</Link>
        </li>

        <li>
          <Link to="/offers/car_service" className="header__link">Автосервис</Link>
        </li>

        <li>
          <Link to="/offers/pasting" className="header__link">Защита кузова</Link>
        </li>
      </ul>
    </div>
  );
}

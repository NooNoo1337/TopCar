import React, {Component, Fragment} from 'react';

import SecondTitle from "../../components/SecondTitle";
import ContentWrapper from "../../components/ContentWrapper";

import './Offers.scss';

const shortid = require('shortid');

const data = [
  {
    title: 'Мойка',
    offers: ['Мойка кузова', 'Евромойка (горячий воск)', 'Комплексная мойка (люкс)', 'Нано-мойка (люкс)', 'Керамомойка', 'Мойка двигателя', 'Мойка днища'],
    img: 'offer_1.jpeg',
  },

  {
    title: 'Химчистка',
    offers: ['Химчистка салона', 'Предпродажная подготовка', 'Чистка детских колясок и автокресел'],
    img: 'offer_2.jpg',
  },

  {
    title: 'Полировка',
    offers: ['Полировка кузова', 'Полировка фар', 'Полировка Koch 1K Nano', 'Полировка жидким стеклом или керамикой'],
    img: 'offer_3.jpg',
  },

  {
    title: 'Чистка + защита хромированных деталей',
    offers: ['Решетка радиатора, накладки, багажник, бампер, насадки труб', 'Передняя защитная решетка'],
    img: 'offer_4.jpg',
  },

  {
    title: 'Шины',
    offers: ['Шиномонтаж', 'Сезонное хранение шин'],
    img: 'offer_5.jpg',
  },

  {
    title: 'Тонирование',
    offers: ['Тонирование стёкл и фар'],
    img: 'offer_6.jpg',
  },

  {
    title: 'Придание свежести салону',
    offers: ['Устранение запахов в салоне', 'Заправка кондиционера'],
    img: 'offer_7.jpg',
  },

  {
    title: 'Автосервис',
    offers: ['Замена тормозных дисков', 'Замена колодок', 'Замена автомасла'],
    img: 'offer_8.jpg',
  },

  {
    title: 'Защита кузова',
    offers: ['Нанесение средства "Антидождь"', 'Бронирование кузова пленкой', 'Оклейка кузова пленкой', 'Автовинил'],
    img: 'offer_10.jpg',
  },

];

export default class Offers extends Component {
  render() {
    return (
      <section className="our-offer" id="offers">
        <ContentWrapper classes="our-offer__wrapper">
          <SecondTitle>Наши услуги</SecondTitle>
          <OfferList offers = {data}/>
        </ContentWrapper>
      </section>
    );
  }
}


function OfferList(props) {
  const offerElement = props.offers.map( (item) =>
    <li className="our-offer__item" key = {shortid.generate()} >
      <OfferItem offer = {item}/>
    </li>
  );

  return(
    <ul className="our-offer__list">
      {offerElement}
    </ul>
  );
  
}

function OfferItem(props) {
  const offerElement = props.offer.offers.map( (item) =>
    <li className="" key = {shortid.generate()} >
      <a className="underline_link" href="">{item}</a>
    </li>
  );

  const background = require(`./img/${props.offer.img}`);

  return(
      <Fragment>
        <div className="our-offer__item-icon" style = {{ backgroundImage: `url(${background})` }} aria-label="Изображение услуги" role="img"></div>

        <div className="our-offer__item-content">
          <h3 className="">{props.offer.title}</h3>

          <ul className="our-offer__item-list">
            {offerElement}
          </ul>
        </div>
      </Fragment>
  );
}

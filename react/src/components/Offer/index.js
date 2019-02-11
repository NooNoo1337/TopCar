import React, {Component} from 'react';


import ContentWrapper from '../../components/ContentWrapper';
import SecondTitle from '../../components/SecondTitle';

import './Offer.scss'


export default class Offer extends Component {
  render() {
    const {offerCollection} = this.props;

    return (
      <section className="offer">
        <ContentWrapper classes="offer__wrapper">
          <SecondTitle classes="offer__title">Прайс-лист на услуги</SecondTitle>
          <OfferTable offerCollection = {offerCollection}/>
        </ContentWrapper>
      </section>
    );
  }
}

function OfferTable(props) {
  return (
    <table className="offer__table">
      <OfferTableRows offers = {props.offerCollection}/>
    </table>
  );
}

class OfferTableRows extends Component {
  state = {
    isTireFix: !!this.props.offers[0].offer_type
  };

  render() {
    const headerRow = this.state.isTireFix ? <tr><th>Шиномонтаж:</th><th> R10-15</th><th> R16</th><th> R17</th><th>R18</th><th>R19</th><th>R20</th><th>R21</th><th>R22 и ></th></tr> : <tr><th>Услуги:</th><th>1 класс</th><th>2 класс</th><th>3 класс</th><th>4 класс</th></tr>;

    const tableElement = this.props.offers.map( (item, index) =>
      <OfferTableRow key = {item.id} offer = {item} number = {index} tireFix = {item.offer_type}/>
    );

    return (
      <tbody>
        {headerRow}
        {tableElement}
      </tbody>
    );
  }
}

function OfferTableRow(props) {
  const {offer, number, tireFix} = props;

  if(!!tireFix) {
    return (
      <tr>
        <td>{number + 1}. {offer.title} </td>
        <td> {offer.first_price} ₽</td>
        <td> {offer.second_price} ₽</td>
        <td> {offer.third_price} ₽ </td>
        <td> {offer.fourth_price} ₽ </td>
        <td> {offer.fifth_price} ₽ </td>
        <td> {offer.sixth_price} ₽ </td>
        <td> {offer.seventh_price} ₽ </td>
        <td> {offer.eighth_price} ₽ </td>
      </tr>
    );
  } else {
    return (
      <tr>
        <td>{number + 1}. {offer.title}</td>
        <td> {offer.first_price} ₽</td>
        <td> {offer.second_price} ₽</td>
        <td> {offer.third_price} ₽ </td>
        <td> {offer.fourth_price} ₽ </td>
      </tr>
    );
  }
}


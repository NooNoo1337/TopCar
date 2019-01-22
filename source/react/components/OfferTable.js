'use strict';

// const element = React.createElement;
const domContainer = document.querySelector('#offer__table-container');
const tireFixSecondContainer = document.querySelector('#tireFixSecond');
const tireFixThirdContainer = document.querySelector('#tireFixThird');
const tireFixFourthContainer = document.querySelector('#tireFixFourth');

class OfferTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <table className="offer__table">
          <OfferTableList offers = {this.props.offerCollection}/>
        </table>
    );
  }
}

class OfferTableRow extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {offer, number, tireFix} = this.props;
    const content = <tr> <td>{number + 1}. {offer.title}</td> <td> {offer.first_price} ₽</td> <td> {offer.second_price} ₽</td> <td> {offer.third_price} ₽ </td> <td> {offer.fourth_price} ₽ </td> </tr>;
    const tireFixContent = <tr> <td>{number + 1}. {offer.title} </td> <td> {offer.first_price} ₽</td> <td> {offer.second_price} ₽</td> <td> {offer.third_price} ₽ </td> <td> {offer.fourth_price} ₽ </td> <td> {offer.fifth_price} ₽ </td> <td> {offer.sixth_price} ₽ </td> <td> {offer.seventh_price} ₽ </td> <td> {offer.eighth_price} ₽ </td> </tr>;


    if(!!tireFix) {
      return (
          <tr> <td>{number + 1}. {offer.title} </td> <td> {offer.first_price} ₽</td> <td> {offer.second_price} ₽</td> <td> {offer.third_price} ₽ </td> <td> {offer.fourth_price} ₽ </td> <td> {offer.fifth_price} ₽ </td> <td> {offer.sixth_price} ₽ </td> <td> {offer.seventh_price} ₽ </td> <td> {offer.eighth_price} ₽ </td> </tr>
      );
    } else {
      return (
          <tr tireFix = {tireFix}> <td>{number + 1}. {offer.title}</td> <td> {offer.first_price} ₽</td> <td> {offer.second_price} ₽</td> <td> {offer.third_price} ₽ </td> <td> {offer.fourth_price} ₽ </td> </tr>
      );
    }
  }
}

class OfferTableList extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    isTireFix: !!offerCollection[0].offer_type
  };

  render() {
    const tableElement = this.props.offers.map( (item, index) =>
        <OfferTableRow key = {item.id} offer = {item} number = {index} tireFix = {item.offer_type}/>
    );

    const headerRow = this.state.isTireFix ? <tr> <th> Шиномонтаж: </th> <th> R10-15 </th> <th> R16 </th> <th> R17 </th> <th> R18 </th> <th> R19 </th> <th> R20 </th> <th> R21 </th> <th> R22 и > </th> </tr> : <tr> <th>Услуги:</th> <th>1 класс</th> <th>2 класс</th> <th>3 класс</th> <th>4 класс</th> </tr>;

    return (
        <tbody>
        {headerRow}
        {tableElement}
        </tbody>
    );
  }
}

ReactDOM.render(<OfferTable offerCollection = {offerCollection}/>, domContainer);

if(window.location.href === 'http://localhost:3004/tire_fitting.html' || window.location.href === 'https://topcarcleaning.ru/') {
  ReactDOM.render(<OfferTable offerCollection = {offerCollectionSecond}/>, tireFixSecondContainer);
  ReactDOM.render(<OfferTable offerCollection = {offerCollectionThird}/>, tireFixThirdContainer);
  ReactDOM.render(<OfferTable offerCollection = {offerCollectionFourth}/>, tireFixFourthContainer);
}
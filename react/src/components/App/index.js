import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

// styles
import '../../sass/fonts.scss';
import '../../sass/normalize.scss';
import '../../sass/global.scss';
import '../../sass/visually-hidden.scss';
import '../../sass/variables.scss';

// components
import Header from "../../components/Header";
import Introduction from "../../components/Introduction";
import Offers from "../../components/Offers";
import Promotions from "../../components/Promotions";
import Contacts from "../../components/Contacts";
import Offer from '../../components/Offer';
import Footer from "../../components/Footer";

// data
const offerCollection = [
  {
    id: 0,
    title: 'Мойка',
    add_info: '(кузов, коврики и пороги)',
    description: 'Мы позаботимся о чистоте кузова, ковриков и порогов вашей машины',
    first_price: 400,
    second_price: 500,
    third_price: 600,
    fourth_price: 700,
  },

  {
    id: 1,
    title: 'Евромойка',
    add_info: '(кузов, коврики и пороги)',
    description: '',
    first_price: 600,
    second_price: 700,
    third_price: 800,
    fourth_price: 900,
  },

  {
    id: 2,
    title: 'Уборка салона пылесосом',
    description: '',
    first_price: 200,
    second_price: 200,
    third_price: 200,
    fourth_price: 200,
  },

  {
    id: 3,
    title: 'Протирка приборной панели и пластика',
    description: '',
    first_price: 100,
    second_price: 150,
    third_price: 150,
    fourth_price: 200,
  },

  {
    id: 4,
    title: 'Чистка всех стёкол изнутри',
    description: '',
    first_price: 200,
    second_price: 200,
    third_price: 250,
    fourth_price: 250,
  },

  {
    id: 5,
    title: 'Чернение резины',
    description: '',
    first_price: 100,
    second_price: 100,
    third_price: 100,
    fourth_price: 100,
  },

  {
    id: 6,
    title: 'Комлекс "Стандарт", включены услуги: 1, 2, 3, 4, 5, 6',
    // add_info: 'мойка "кузов, коврики и пороги, евромойка "кузов, коврики и пороги", уборка салона пылесосом, протирка приборной панели и пластика, чистка всех стёкол изнутри, чернение резины',
    description: 'Комлекс включает в себя: мойку кузова, ковриков и порогов, евромойку кузова, ковриков и порогов", уборку салона пылесосом, протирку приборной панели и пластика, чистку всех стёкол изнутри и чернение резины',
    first_price: 800,
    second_price: 1000,
    third_price: 1100,
    fourth_price: 1300,
  },

  {
    id: 7,
    title: 'Кондиционер кожи',
    description: '',
    first_price: 200,
    second_price: 200,
    third_price: 300,
    fourth_price: 300,
  },

  {
    id: 8,
    title: 'Комлекс "TopCar", включены услуги: 6, 7, 8, 11',
    // add_info: 'чернение резины, комлекс "Стандарт", кондиционер кожи, обработка автомобиля НАНО-шампунем',
    description: '',
    first_price: 1100,
    second_price: 1300,
    third_price: 1500,
    fourth_price: 1700,
  },

  {
    id: 9,
    title: 'Ополаскивание кузова',
    description: '',
    first_price: 200,
    second_price: 250,
    third_price: 300,
    fourth_price: 350,
  },

  {
    id: 10,
    title: 'Обработка автомобиля НАНО-шампунем',
    description: '',
    first_price: 200,
    second_price: 200,
    third_price: 200,
    fourth_price: 200,
  },

  {
    id: 11,
    title: 'Мойка ковриков',
    description: '',
    first_price: 100,
    second_price: 100,
    third_price: 100,
    fourth_price: 100,
  },

  {
    id: 12,
    title: 'Чистка багажника пылесосом',
    description: '',
    first_price: 150,
    second_price: 150,
    third_price: 200,
    fourth_price: 250,
  },

  {
    id: 13,
    title: 'Протирка приборной панели',
    description: '',
    first_price: 100,
    second_price: 100,
    third_price: 150,
    fourth_price: 150,
  },

  {
    id: 14,
    title: 'Протирка лобового стекла изнутри',
    description: '',
    first_price: 100,
    second_price: 100,
    third_price: 100,
    fourth_price: 100,
  },

  {
    id: 15,
    title: 'Мойка порогов',
    description: '',
    first_price: 100,
    second_price: 150,
    third_price: 200,
    fourth_price: 200,
  },

  {
    id: 16,
    title: 'Химчистка диска',
    description: '',
    first_price: 150,
    second_price: 150,
    third_price: 150,
    fourth_price: 150,
  },

  {
    id: 17,
    title: 'Cнятие следов насекомых',
    description: '',
    first_price: 400,
    second_price: 500,
    third_price: 600,
    fourth_price: 700,
  },

  {
    id: 18,
    title: 'Мойка двигателя',
    description: '',
    first_price: 600,
    second_price: 600,
    third_price: 800,
    fourth_price: 800,
  },
];

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Header/>
            <main role="main">
              <Switch>
                <Route path="/main" exact component = {MainPage}/>
                <Route path="/offers" component = {Offers}/>
                <Route path="/promotions" component = {Promotions}/>
                <Route path="/contacts" component = {Contacts}/>
                <Route component = {Page404}/>
              </Switch>
            </main>
            <Footer/>
          </div>
        </Router>
      </div>
    );
  }
}

function MainPage() {
  return (
    <div>
      <Introduction />
      <Offers />
      <Promotions />
      <Contacts />
      <Offer offerCollection = {offerCollection}/>
    </div>
  );
}

function Page404() {
  return (
    <div>Error 404</div>
  );
}

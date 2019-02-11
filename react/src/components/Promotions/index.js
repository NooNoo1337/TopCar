import React, {Component} from 'react';
import AriaModal from 'react-aria-modal';

import SecondTitle from "../../components/SecondTitle";
import ContentWrapper from "../../components/ContentWrapper";
import Popup from '../../components/Popup';

import './Promotions.scss'

export default class Promotions extends Component {
  state = {
    firstModalActive: false,
    secondModalActive: false
  };

  render() {
    return (
      <section className="promotions" id="promotions">
        <ContentWrapper classes="promotions__wrapper">
          <div className="promotion__bg"></div>
          <SecondTitle classes="promotions__title second-title--white">Акции</SecondTitle>
          <PromotionList firstModalActive = {this.state.firstModalActive} secondModalActive = {this.state.secondModalActive} activeFirstModal = {this.activeFirstModal.bind(this)} activeSecondModal = {this.activeSecondModal.bind(this)} deactivateModal = {this.deactivateModal.bind(this)} getApplicationNode = {this.getApplicationNode.bind(this)}/>
        </ContentWrapper>
      </section>
    );
  }

  activeFirstModal = (evt) => {
    this.setState({
      firstModalActive: true
    });
  };

  activeSecondModal = (evt) => {
    this.setState({
      secondModalActive: true
    });
  };

  deactivateModal = () => {
    this.setState({
      firstModalActive: false,
      secondModalActive: false
    });
  };

  getApplicationNode = () => {
    return document.getElementById('application');
  };
}

function PromotionList(props) {
  const {firstModalActive, secondModalActive, activeFirstModal, activeSecondModal, deactivateModal} = props;

  const modal = firstModalActive ?
    <AriaModal titleText="first-promo" onExit={deactivateModal} initialFocus="#first-promotion" verticallyCenter="true" dialogId="sas">

      <Popup id="modal-1" classes="promotions__popup" title="Cкидка за пост" deactivateModal = {deactivateModal}>
        <p>Условия акции:</p>
        <ul className="promotions__conditions">
          <li className="promotions__condition">
            подпишитесь на нас в instagram;
          </li>

          <li className="promotions__condition">
            опубликуйте пост с фотографией свой машины и с хештэгом <span>#topcarcleaning</span>;
          </li>

          <li className="promotions__condition">
            покажи этот пост менеджеру и получи скидку <span className="percent">20%</span>!
          </li>
        </ul>
      </Popup>
    </AriaModal>
    :
    false;

    const modal2 = secondModalActive ?
      <AriaModal titleText="second-promo" onExit={deactivateModal} initialFocus="#second-promotion" verticallyCenter="true" data-id="first-promotion">
        <Popup id="modal-2" classes="promotions__popup" title="Каждая 10ая мойка в подарок" deactivateModal = {deactivateModal}>
          <p>
            После первого посещения мойки вы получите карту, на которой будут фиксироваться ваши визиты. <br />
          </p>
          <p>
            После 9 моек - <span className="percent">10ая в подарок!</span>
          </p>
        </Popup>
      </AriaModal>
      :
      false;

  return (
    <ul className="promotions__list">
      <PromotionItem>
        <button className="promotions__link" id="first-promotion" type="button" onClick = {activeFirstModal}>
          <h3 className="promotion__subtitle">
            Скидка за пост
          </h3>
        </button>
        {modal}
      </PromotionItem>

      <PromotionItem>
        <button className="promotions__link" id="second-promotion" type="button" onClick = {activeSecondModal}>
          <h3 className="promotion__subtitle">
            Каждая 10-ая мойка в подарок
          </h3>
        </button>
        {modal2}
      </PromotionItem>
    </ul>
  );
}

function PromotionItem(props) {
  return (
    <li className="promotions__item">
      {props.children}
    </li>
  );
}

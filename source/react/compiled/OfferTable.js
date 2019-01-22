'use strict';

// const element = React.createElement;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var domContainer = document.querySelector('#offer__table-container');
var tireFixSecondContainer = document.querySelector('#tireFixSecond');
var tireFixThirdContainer = document.querySelector('#tireFixThird');
var tireFixFourthContainer = document.querySelector('#tireFixFourth');

var OfferTable = function (_React$Component) {
  _inherits(OfferTable, _React$Component);

  function OfferTable(props) {
    _classCallCheck(this, OfferTable);

    return _possibleConstructorReturn(this, (OfferTable.__proto__ || Object.getPrototypeOf(OfferTable)).call(this, props));
  }

  _createClass(OfferTable, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'table',
        { className: 'offer__table' },
        React.createElement(OfferTableList, { offers: this.props.offerCollection })
      );
    }
  }]);

  return OfferTable;
}(React.Component);

var OfferTableRow = function (_React$Component2) {
  _inherits(OfferTableRow, _React$Component2);

  function OfferTableRow(props) {
    _classCallCheck(this, OfferTableRow);

    return _possibleConstructorReturn(this, (OfferTableRow.__proto__ || Object.getPrototypeOf(OfferTableRow)).call(this, props));
  }

  _createClass(OfferTableRow, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          offer = _props.offer,
          number = _props.number,
          tireFix = _props.tireFix;

      var content = React.createElement(
        'tr',
        null,
        ' ',
        React.createElement(
          'td',
          null,
          number + 1,
          '. ',
          offer.title
        ),
        ' ',
        React.createElement(
          'td',
          null,
          ' ',
          offer.first_price,
          ' \u20BD'
        ),
        ' ',
        React.createElement(
          'td',
          null,
          ' ',
          offer.second_price,
          ' \u20BD'
        ),
        ' ',
        React.createElement(
          'td',
          null,
          ' ',
          offer.third_price,
          ' \u20BD '
        ),
        ' ',
        React.createElement(
          'td',
          null,
          ' ',
          offer.fourth_price,
          ' \u20BD '
        ),
        ' '
      );
      var tireFixContent = React.createElement(
        'tr',
        null,
        ' ',
        React.createElement(
          'td',
          null,
          number + 1,
          '. ',
          offer.title,
          ' '
        ),
        ' ',
        React.createElement(
          'td',
          null,
          ' ',
          offer.first_price,
          ' \u20BD'
        ),
        ' ',
        React.createElement(
          'td',
          null,
          ' ',
          offer.second_price,
          ' \u20BD'
        ),
        ' ',
        React.createElement(
          'td',
          null,
          ' ',
          offer.third_price,
          ' \u20BD '
        ),
        ' ',
        React.createElement(
          'td',
          null,
          ' ',
          offer.fourth_price,
          ' \u20BD '
        ),
        ' ',
        React.createElement(
          'td',
          null,
          ' ',
          offer.fifth_price,
          ' \u20BD '
        ),
        ' ',
        React.createElement(
          'td',
          null,
          ' ',
          offer.sixth_price,
          ' \u20BD '
        ),
        ' ',
        React.createElement(
          'td',
          null,
          ' ',
          offer.seventh_price,
          ' \u20BD '
        ),
        ' ',
        React.createElement(
          'td',
          null,
          ' ',
          offer.eighth_price,
          ' \u20BD '
        ),
        ' '
      );

      if (!!tireFix) {
        return React.createElement(
          'tr',
          null,
          ' ',
          React.createElement(
            'td',
            null,
            number + 1,
            '. ',
            offer.title,
            ' '
          ),
          ' ',
          React.createElement(
            'td',
            null,
            ' ',
            offer.first_price,
            ' \u20BD'
          ),
          ' ',
          React.createElement(
            'td',
            null,
            ' ',
            offer.second_price,
            ' \u20BD'
          ),
          ' ',
          React.createElement(
            'td',
            null,
            ' ',
            offer.third_price,
            ' \u20BD '
          ),
          ' ',
          React.createElement(
            'td',
            null,
            ' ',
            offer.fourth_price,
            ' \u20BD '
          ),
          ' ',
          React.createElement(
            'td',
            null,
            ' ',
            offer.fifth_price,
            ' \u20BD '
          ),
          ' ',
          React.createElement(
            'td',
            null,
            ' ',
            offer.sixth_price,
            ' \u20BD '
          ),
          ' ',
          React.createElement(
            'td',
            null,
            ' ',
            offer.seventh_price,
            ' \u20BD '
          ),
          ' ',
          React.createElement(
            'td',
            null,
            ' ',
            offer.eighth_price,
            ' \u20BD '
          ),
          ' '
        );
      } else {
        return React.createElement(
          'tr',
          { tireFix: tireFix },
          ' ',
          React.createElement(
            'td',
            null,
            number + 1,
            '. ',
            offer.title
          ),
          ' ',
          React.createElement(
            'td',
            null,
            ' ',
            offer.first_price,
            ' \u20BD'
          ),
          ' ',
          React.createElement(
            'td',
            null,
            ' ',
            offer.second_price,
            ' \u20BD'
          ),
          ' ',
          React.createElement(
            'td',
            null,
            ' ',
            offer.third_price,
            ' \u20BD '
          ),
          ' ',
          React.createElement(
            'td',
            null,
            ' ',
            offer.fourth_price,
            ' \u20BD '
          ),
          ' '
        );
      }
    }
  }]);

  return OfferTableRow;
}(React.Component);

var OfferTableList = function (_React$Component3) {
  _inherits(OfferTableList, _React$Component3);

  function OfferTableList(props) {
    _classCallCheck(this, OfferTableList);

    var _this3 = _possibleConstructorReturn(this, (OfferTableList.__proto__ || Object.getPrototypeOf(OfferTableList)).call(this, props));

    _this3.state = {
      isTireFix: !!offerCollection[0].offer_type
    };
    return _this3;
  }

  _createClass(OfferTableList, [{
    key: 'render',
    value: function render() {
      var tableElement = this.props.offers.map(function (item, index) {
        return React.createElement(OfferTableRow, { key: item.id, offer: item, number: index, tireFix: item.offer_type });
      });

      var headerRow = this.state.isTireFix ? React.createElement(
        'tr',
        null,
        ' ',
        React.createElement(
          'th',
          null,
          ' \u0428\u0438\u043D\u043E\u043C\u043E\u043D\u0442\u0430\u0436: '
        ),
        ' ',
        React.createElement(
          'th',
          null,
          ' R10-15 '
        ),
        ' ',
        React.createElement(
          'th',
          null,
          ' R16 '
        ),
        ' ',
        React.createElement(
          'th',
          null,
          ' R17 '
        ),
        ' ',
        React.createElement(
          'th',
          null,
          ' R18 '
        ),
        ' ',
        React.createElement(
          'th',
          null,
          ' R19 '
        ),
        ' ',
        React.createElement(
          'th',
          null,
          ' R20 '
        ),
        ' ',
        React.createElement(
          'th',
          null,
          ' R21 '
        ),
        ' ',
        React.createElement(
          'th',
          null,
          ' R22 \u0438 > '
        ),
        ' '
      ) : React.createElement(
        'tr',
        null,
        ' ',
        React.createElement(
          'th',
          null,
          '\u0423\u0441\u043B\u0443\u0433\u0438:'
        ),
        ' ',
        React.createElement(
          'th',
          null,
          '1 \u043A\u043B\u0430\u0441\u0441'
        ),
        ' ',
        React.createElement(
          'th',
          null,
          '2 \u043A\u043B\u0430\u0441\u0441'
        ),
        ' ',
        React.createElement(
          'th',
          null,
          '3 \u043A\u043B\u0430\u0441\u0441'
        ),
        ' ',
        React.createElement(
          'th',
          null,
          '4 \u043A\u043B\u0430\u0441\u0441'
        ),
        ' '
      );

      return React.createElement(
        'tbody',
        null,
        headerRow,
        tableElement
      );
    }
  }]);

  return OfferTableList;
}(React.Component);

ReactDOM.render(React.createElement(OfferTable, { offerCollection: offerCollection }), domContainer);

if (window.location.href === 'http://localhost:3004/tire_fitting.html' || window.location.href === 'https://topcarcleaning.ru/') {
  ReactDOM.render(React.createElement(OfferTable, { offerCollection: offerCollectionSecond }), tireFixSecondContainer);
  ReactDOM.render(React.createElement(OfferTable, { offerCollection: offerCollectionThird }), tireFixThirdContainer);
  ReactDOM.render(React.createElement(OfferTable, { offerCollection: offerCollectionFourth }), tireFixFourthContainer);
}
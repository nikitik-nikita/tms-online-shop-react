import React, { Component } from 'react';

import Header from './Header';
import MainBody from './MainBody';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      basket: {
        count: 0,
        amount: 0,
      },
    };

    this.addToBasket = this.addToBasket.bind(this);
    this.removeFromBasket = this.removeFromBasket.bind(this);
  }

  addToBasket(product) {
    this.setState((prevState) => ({
      basket: {
        count: prevState.basket.count + 1,
        amount: prevState.basket.amount + product.price.value,
      },
    }));
  }

  removeFromBasket(product) {
    this.setState((prevState) => ({
      basket: {
        count: prevState.basket.count - 1,
        amount: prevState.basket.amount - product.price.value,
      },
    }));
  }

  render() {
    return (
      <>
        <Header basket={this.state.basket} />
        <MainBody addToBasket={this.addToBasket} removeFromBasket={this.removeFromBasket} />
      </>
    );
  }
}

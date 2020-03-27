import React, { Component } from 'react';

export default class Basket extends Component {
  render() {
    return (
      <div>
        <p>
          Basket
          <span className="basket__circle--counter">0</span>
        </p>
        <p className="amount">
          amount:
          <span className="amount__sum">0</span>
          $
        </p>
      </div>
    );
  }
}

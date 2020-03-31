import React from 'react';
import PropTypes from 'prop-types';

const Basket = ({ count, amount }) => (
  <div>
    <p>
      Basket
      <span className="basket__circle--counter">{count}</span>
    </p>
    <p className="amount">
      amount:
      <span className="amount__sum">{amount}</span>
      $
    </p>
  </div>
);

export default Basket;

Basket.propTypes = {
  count: PropTypes.number.isRequired,
  amount: PropTypes.number.isRequired,
};

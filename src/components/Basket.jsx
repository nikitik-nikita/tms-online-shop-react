import React from 'react';

import { number, func, string } from 'prop-types';

const Basket = ({
  count, amount, onClick, currency,
}) => (
  <>
    <div className="basket" onClick={onClick} tabIndex={0} onKeyPress={onClick} role="menuitem">
      <p>
        Basket
        <span className="basket__circle--counter">
          {count}
        </span>
      </p>
      <p className="amount">
        amount:
        <span className="amount__sum">
          {(amount).toLocaleString('en-En')}
          {' '}
          {currency}
        </span>
      </p>
    </div>
  </>
);

Basket.displayName = 'Basket';

Basket.propTypes = {
  count: number.isRequired,
  amount: number.isRequired,
  onClick: func.isRequired,
  currency: string.isRequired,
};

export default Basket;

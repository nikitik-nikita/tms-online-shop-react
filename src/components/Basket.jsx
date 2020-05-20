import React from 'react';

import { number, func, string } from 'prop-types';

// helpers
import numberView from 'helpers/numberView';

// Styles (hooks)
import useStyles from 'styles/components/Basket';

const Basket = ({
  count, amount, onClick, currency,
}) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.basket} onClick={onClick} tabIndex={0} onKeyPress={onClick} role="menuitem">
        <p>
          Basket
          <span className={classes.basket__circle__counter}>
            {count}
          </span>
        </p>
        <p className={classes.amount}>
          amount:
          <span className={classes.amount__sum}>
            {numberView(amount)}
            {' '}
            {currency}
          </span>
        </p>
      </div>
    </>
  );
};

Basket.displayName = 'Basket';

Basket.propTypes = {
  count: number.isRequired,
  amount: number.isRequired,
  onClick: func.isRequired,
  currency: string.isRequired,
};

export default Basket;

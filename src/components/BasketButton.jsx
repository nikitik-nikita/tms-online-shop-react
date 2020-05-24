import React, { useState, useEffect } from 'react';
import { compose } from 'redux';

import {
  func, array, shape, number, string, object,
} from 'prop-types';

// HOKs
import { connect } from 'react-redux';
import classNames from 'classnames';

// Actions
import { addToBasket, removeFromBasket } from 'actions';

// Styles (hooks)
import useStyles from 'styles/components/BasketButton';

const BasketButton = ({
  product,
  ...props
}) => {
  const classes = useStyles();
  const [active, setActiveData] = useState({ status: false });

  useEffect(() => {
    if (props.basket.productIds.find((item) => item === product.id)) {
      setActiveData({ status: true });
    } else {
      setActiveData({ status: false });
    }
  }, [props.basket]);

  const payload = { productId: product.id, priceValue: product.price.value, priceCurrency: product.price.currency };
  const handleBasket = (event) => {
    event.preventDefault();
    setActiveData((prevState) => ({ status: !prevState.status }));
    active.status ? props.removeFromBasket(payload) : props.addToBasket(payload);
  };

  const text = active.status ? 'Remove from Basket' : 'Add to Basket';
  return (
    <>
      <a
        href="#"
        className={classNames(classes.add_to_basket, { [classes.active]: active.status })}
        onClick={handleBasket}
      >
        {text}
      </a>
    </>
  );
};

const mapStateToProps = (state) => ({
  basket: state.basket,
});

const mapDispatchToProps = {
  addToBasket,
  removeFromBasket,
};

BasketButton.displayName = 'Button';

BasketButton.propTypes = {
  product: object.isRequired,
  basket: shape({
    count: number.isRequired,
    amount: number.isRequired,
    currency: string.isRequired,
    productIds: array.isRequired,
  }).isRequired,
  addToBasket: func.isRequired,
  removeFromBasket: func.isRequired,
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(BasketButton);

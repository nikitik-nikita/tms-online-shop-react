import React, { useState } from 'react';
import { compose } from 'redux';

import {
  number,
  string,
  shape,
  array,
} from 'prop-types';

// HOCs
import { connect } from 'react-redux';

// Styles (hooks)
import useStyles from 'styles/containers/Header';

// Components
import Logo from 'components/Logo';
import Search from 'components/Search';
import Basket from 'components/Basket';
import Modal from 'components/Modal';
import OnlyProduct from 'containers/OnlyProduct';
import ThemeSwitcher from 'components/ThemeSwitcher';

const Header = ({ basket, products }) => {
  const classes = useStyles();
  const [modalActive, setModalActive] = useState(false);

  const { productIds } = basket;
  const basketProducts = products.filter((product) => productIds.includes(product.id));
  // console.log(basketProducts);
  // console.log(modalActive);

  const openModal = () => {
    setModalActive(true);
  };

  const closeModal = () => {
    setModalActive(false);
  };

  return (
    <div className={classes.Root}>
      <div className={`container ${classes.Header__container}`}>
        <Logo />
        <Search />
        <ThemeSwitcher />
        <Basket
          onClick={openModal}
          count={basket.count}
          amount={basket.amount}
          currency={basket.currency}
        />
        <Modal display={modalActive} onClick={closeModal}>
          {basketProducts.length
            ? basketProducts.map((product) => (
              <OnlyProduct
                key={product.id}
                product={product}
              />
            ))
            : (<div style={{ fontSize: '30px' }}>Basket is empty &#128524;</div>)}
        </Modal>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  basket: state.basket,
  products: state.products.current,
});

Header.displayName = 'Header';

Header.propTypes = {
  basket: shape({
    count: number.isRequired,
    amount: number.isRequired,
    currency: string.isRequired,
    productIds: array.isRequired,
  }).isRequired,
  products: array.isRequired,
};

export default compose(
  connect(
    mapStateToProps,
  ),
)(Header);

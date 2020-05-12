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

// Components
import Logo from 'components/Logo';
import Search from 'components/Search';
import Basket from 'components/Basket';
import Modal from 'components/Modal';
import OnlyProduct from './OnlyProduct';

// Styles
import 'styles/containers/Header.css';
import 'styles/components/Search.css';
import 'styles/components/Basket.css';

const Header = ({ basket, products }) => {
  const [modalActive, setModalActive] = useState(false);

  const openModal = () => {
    setModalActive(true);
  };

  const closeModal = () => {
    setModalActive(false);
  };

  const { productIds } = basket;
  const basketProducts = products.filter((product) => productIds.includes(product.id));
  console.log(basketProducts);
  console.log(modalActive);

  return (
    <div className="Header">
      <div className="container Header__container">
        <Logo />
        <Search />
        <Basket
          onClick={openModal}
          count={basket.count}
          amount={basket.amount}
          currency={basket.currency}
        />
        <Modal display={modalActive} onClose={closeModal}>
          {basketProducts.length
            ? basketProducts.map((product) => (
              <OnlyProduct
                key={product.id}
                product={product}
              />
            ))
            : (<div>Basket is empty</div>)}
        </Modal>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  basket: state.basket,
  products: state.products,
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

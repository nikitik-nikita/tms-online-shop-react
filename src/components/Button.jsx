import React, { useState, useEffect } from 'react';
import { compose } from 'redux';
// import { useParams } from 'react-router';

import {
  func, array, shape, number, string, object,
} from 'prop-types';

// HOKs
import { connect } from 'react-redux';
import classNames from 'classnames';
// import { useDidiUpdateEffect } from 'hooks';

// Actions
import { addToBasket, removeFromBasket } from 'actions';

// Styles
import 'styles/components/Button.css';

const Button = ({
  product,
  ...props
}) => {
  const [active, setActiveData] = useState({ status: false });

  useEffect(() => {
    if (props.basket.productIds.find((item) => item === product.id)) {
      setActiveData({ status: true });
    } else {
      setActiveData({ status: false });
    }
  }, [props.basket]);

  // useDidiUpdateEffect(() => {
  //   const payload = { productId: product.id, priceValue: product.price.value, priceCurrency: product.price.currency };
  //
  //   if (active.status) {
  //     props.addToBasket(payload);
  //   } else {
  //     props.removeFromBasket(payload);
  //   }
  // }, [active.status]);

  const payload = { productId: product.id, priceValue: product.price.value, priceCurrency: product.price.currency };
  const handleBasket = (event) => {
    event.preventDefault();
    setActiveData((prevState) => ({ status: !prevState.status }));
    active.status ? props.removeFromBasket(payload) : props.addToBasket(payload);
  };


  const text = active.status ? 'Remove from Basket' : 'Add to Basket';
  return (
    <>
      <div
        className={classNames('add-to-basket', { _active: active.status })}
        onClick={handleBasket}
        tabIndex={0}
        onKeyPress={handleBasket}
        role="button"
      >
        {text}
      </div>
    </>
  );
};

// class Button extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { active: false };
//
//     this.handleClick = this.handleClick.bind(this);
//   }
//
//   componentDidMount() {
//     if (this.props.basket.productIds.find(item => item === this.props.product.id)) {
//       this.setState({ active: true });
//     } else {
//       this.setState({ active: false });
//     }
//   }
//
//   handleClick(event) {
//     event.preventDefault();
//     this.setState((prevState) => ({ active: !prevState.active }), () => {
//       this.state.active
//         ? this.props.addToBasket({ productId: this.props.product.id, priceValue: this.props.product.price.value, priceCurrency: this.props.product.price.currency })
//         : this.props.removeFromBasket({ productId: this.props.product.id, priceValue: this.props.product.price.value, priceCurrency: this.props.product.price.currency });
//     });
//   }
//
//   render() {
//     const { active } = this.state;
//     const text = active ? 'Remove from Basket' : 'Add to Basket';
//     return (
//       <>
//         <a
//           className={classNames('add-to-basket', { _active: active })}
//           href="#"
//           onClick={this.handleClick}
//         >
//           {text}
//         </a>
//       </>
//     );
//   }
// }

const mapStateToProps = (state) => ({
  basket: state.basket,
  // products: state.products,
});

const mapDispatchToProps = {
  addToBasket,
  removeFromBasket,
};

Button.displayName = 'Button';

Button.propTypes = {
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
)(Button);

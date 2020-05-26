import React from 'react';
import { compose } from 'redux';
import { useParams } from 'react-router';
import { array, object } from 'prop-types';

// HOCs
import { connect } from 'react-redux';

// helpers
import numberView from 'helpers/numberView';

// Styles (hooks)
import useStyles from 'styles/containers/Products';

// Components
import ProductImage from 'components/ProductImage';
import BasketButton from 'components/BasketButton';

const OnlyProduct = ({ products, ...props }) => {
  const classes = useStyles();
  const params = useParams();

  const product = products.find((item) => item.id === params.id) || { price: {} };

  const { value: priceValue = 0, currency: priceCurrency } = product.price;
  return (
    <div className={classes.Root}>
      <div className={classes.Products__table__information}>
        <div className={`wrap ${classes.product__wrap}`}>
          <div className={classes.product__cell}>
            <ProductImage src={product.imageLink} alt={product.title} product={product} />
            <div className={classes.product__text}>
              <p className={classes.product__text__title}>{product.title}</p>
              <p
                className={classes.product__text__description}
                dangerouslySetInnerHTML={{ __html: product.description }}
              />
            </div>
          </div>
          <div className={classes.product__cost}>
            <p className={classes.product__cost__info}>
              {(priceCurrency)}
              {' '}
              {numberView(priceValue)}
            </p>
            <BasketButton product={product} {...props} />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.products.current,
});

OnlyProduct.displayName = 'OnlyProduct';

OnlyProduct.propTypes = {
  product: object,
  products: array.isRequired,
};

export default compose(
  connect(
    mapStateToProps,
  ),
)(OnlyProduct);

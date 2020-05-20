import React from 'react';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import { array } from 'prop-types';

// HOCs
import { connect } from 'react-redux';

// Components
import ProductImage from 'components/ProductImage';
import Button from 'components/Button';

// helpers
import numberView from 'helpers/numberView';

// Styles (hooks)
import useStyles from 'styles/containers/Products';

const Products = ({ products }) => {
  const classes = useStyles();

  return (
    <div className={classes.Root}>
      {products.map((product) => (
        <div className={classes.Products__table__information} key={product.id}>
          <div className={`wrap ${classes.product__wrap}`}>
            <div className={classes.product__cell}>
              <Link to={`/product/${product.id}`}>
                <ProductImage
                  src={product.imageLink}
                  alt={product.title}
                  product={product}
                />
              </Link>
              <div className={classes.product__text}>
                <Link to={`/product/${product.id}`}>
                  <p className={classes.product__text__title}>{product.title}</p>
                </Link>
                <p
                  className={classes.product__text__description}
                  dangerouslySetInnerHTML={{ __html: product.description }}
                />
              </div>
            </div>
            <div className={classes.product__cost}>
              <p className={classes.product__cost__info}>
                {(product.price.currency)}
                {' '}
                {numberView(product.price.value)}
              </p>
              <Button product={product} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};


const mapStateToProps = (state) => ({
  products: state.products.current,
});

Products.displayName = 'Products';

Products.propTypes = {
  products: array.isRequired,
};

export default compose(
  connect(
    mapStateToProps,
  ),
)(Products);

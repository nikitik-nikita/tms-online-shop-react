import React from 'react';

import { string } from 'prop-types';

// Styles (hooks)
import useStyles from 'styles/components/ProductImage';

const ProductImage = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.product__img__wrap}>
      <img className={classes.product__img} alt={props.alt} src={props.src} />
    </div>
  );
};

ProductImage.displayName = 'ProductImage';

ProductImage.propTypes = {
  alt: string,
  src: string,
};

export default ProductImage;

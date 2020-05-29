import { createUseStyles } from 'react-jss';

const productImageStyles = {
  product__img__wrap: {
    width: '175px',
    height: '115px',
    textAlign: 'center',
  },
  product__img: {
    maxWidth: '100%',
    maxHeight: '100%',
  },
};

export default createUseStyles(productImageStyles, { name: 'ProductImage', index: 308 });

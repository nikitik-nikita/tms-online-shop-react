import { createUseStyles } from 'react-jss';

const productsStyles = {
  Root: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '25px',
  },
  Products__table__information: {
    borderRadius: '4px',
    backgroundColor: '#ffffff',
    marginBottom: '20px',
  },
  product__wrap: {
    height: '145px',
  },
  product__cell: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  product__text: {
    marginLeft: '23px',
    display: 'flex',
    flexDirection: 'column',
    height: '97px',
  },
  product__text__title: {
    marginBottom: '18px',
  },
  product__text__description: {
    font: {
      weight: 400,
      size: '12px',
    },
  },
  product__cost: {
    position: 'relative',
    bottom: '-27px',
  },
  product__cost__info: {
    display: 'flex',
    justifyContent: 'flex-end',
    font: {
      weight: 600,
      size: '16px',
    },
    marginBottom: '5px',
  },
};

export default createUseStyles(productsStyles, { name: 'Products', index: 301 });

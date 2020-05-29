import { createUseStyles } from 'react-jss';

const productsStyles = (theme) => ({
  Root: {
    display: 'flex',
    flexDirection: 'column',
  },
  Products__table__information: {
    borderRadius: '4px',
    backgroundColor: theme.palette.background.paper,
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
      weight: theme.typography.fontWeightRegular,
      size: theme.typography.fontSizeNormal,
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
      weight: theme.typography.fontWeightMedium,
      size: theme.typography.fontSizeGlobal,
    },
    marginBottom: '5px',
  },
});

export default createUseStyles(productsStyles, { name: 'Products', index: 301 });

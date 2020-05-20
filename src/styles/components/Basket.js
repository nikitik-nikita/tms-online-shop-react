import { createUseStyles } from 'react-jss';

const basketStyles = {
  basket: {
    '&:hover': {
      cursor: 'pointer',
    },
  },

  basket__circle__counter: {
    font: {
      size: '9px',
      weight: 400,
    },
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '15px',
    height: '15px',
    color: '#ffffff',
    background: '#ff8b38',
    transform: 'translateY(-10px)',
    borderRadius: '50%',
  },
  amount: {
    fontSize: '9px',
    color: '#c1c1c2',
  },
  amount__sum: {
    fontSize: '9px',
  },
};

export default createUseStyles(basketStyles, { name: 'Basket', index: 302 });

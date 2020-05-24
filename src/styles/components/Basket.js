import { createUseStyles } from 'react-jss';

const basketStyles = (theme) => ({
  basket: {
    '&:hover': {
      cursor: 'pointer',
    },
  },

  basket__circle__counter: {
    font: {
      size: theme.typography.fontSizeSmall,
      weight: theme.typography.fontWeightRegular,
    },
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '15px',
    height: '15px',
    color: theme.palette.text.primary,
    background: theme.palette.background.elements,
    transform: 'translateY(-10px)',
    borderRadius: '50%',
  },
  amount: {
    fontSize: theme.typography.fontSizeSmall,
    color: theme.palette.text.header,
  },
  amount__sum: {
    fontSize: theme.typography.fontSizeSmall,
  },
});

export default createUseStyles(basketStyles, { name: 'Basket', index: 302 });

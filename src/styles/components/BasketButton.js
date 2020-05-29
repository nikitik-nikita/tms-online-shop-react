import { createUseStyles } from 'react-jss';

const BasketButtonStyles = (theme) => ({
  add_to_basket: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: theme.palette.text.primary,
    width: '270px',
    height: '35px',
    backgroundColor: theme.palette.action.active,
    borderStyle: 'none',
    borderRadius: '3px',
    padding: 0,
    cursor: 'pointer',

    '&:hover': {
      backgroundColor: theme.palette.action.hoverActive,
    },

    '&$active': {
      backgroundColor: theme.palette.action.inActive,

      '&:hover': {
        backgroundColor: theme.palette.action.hoverInActive,
      },
    },
  },
  active: {},
});

export default createUseStyles(BasketButtonStyles, { name: 'BasketButton', index: 303 });

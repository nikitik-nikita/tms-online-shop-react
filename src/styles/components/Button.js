import { createUseStyles } from 'react-jss';

const buttonStyles = {
  add_to_basket: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#ffffff',
    width: '270px',
    height: '35px',
    backgroundColor: '#ff8b38',
    borderStyle: 'none',
    borderRadius: '3px',
    padding: 0,
    cursor: 'pointer',
    '&$active': {
      backgroundColor: 'grey',
    },
  },
  active: {},
};

export default createUseStyles(buttonStyles, { name: 'Button', index: 303 });

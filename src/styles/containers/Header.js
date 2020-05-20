import { createUseStyles } from 'react-jss';

const headerStyles = {
  Root: {
    width: '100%',
    background: '#252525',
  },
  Header__container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '60px',
    color: '#f5f5f7',
  },
};

export default createUseStyles(headerStyles, { name: 'Header', index: 300 });

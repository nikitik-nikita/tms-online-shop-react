import { createUseStyles } from 'react-jss';

const headerStyles = (theme) => ({
  Root: {
    width: '100%',
    background: theme.palette.background.header,
  },
  Header__container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '60px',
    color: theme.palette.text.header,
  },
});

export default createUseStyles(headerStyles, { name: 'Header', index: 300 });

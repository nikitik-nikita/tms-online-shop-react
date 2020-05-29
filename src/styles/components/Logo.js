import { createUseStyles } from 'react-jss';

const logoStyles = (theme) => ({
  logo: {
    color: theme.palette.text.header,
    textDecoration: 'none',
  },
});

export default createUseStyles(logoStyles, { name: 'Logo', index: 304 });

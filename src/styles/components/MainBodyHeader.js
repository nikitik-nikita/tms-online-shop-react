import { createUseStyles } from 'react-jss';

const mainBodyHeaderStyles = (theme) => ({
  Sort__wrap: {
    height: '20px',
    padding: '6px',
    borderRadius: '4px',
    backgroundColor: theme.palette.background.paper,
    margin: '20px 0',
  },
  Sort__value: {
    fontSize: theme.typography.fontSizeNormal,
  },
});

export default createUseStyles(mainBodyHeaderStyles, { name: 'MainBodyHeader', index: 306 });

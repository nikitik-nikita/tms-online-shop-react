const globalStyles = (theme) => ({
  '*': {
    margin: 0,
    fontFamily: theme.typography.fontFamily,
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: theme.typography.fontSizeGlobal,
    boxSizing: 'border-box',
  },
  body: {
    overflow: 'auto',
    background: theme.palette.background.default,
  },
  a: {
    color: theme.palette.text.main,
    textDecoration: 'none',
  },
  input: {
    width: theme.typography.fontWeightRegular,
    height: '25px',
    borderStyle: 'none',
    borderRadius: '3px',
    fontSize: theme.typography.fontSizeNormal,
    paddingLeft: '5px',
  },
  '.container': {
    maxWidth: '901px',
    margin: '0 auto',
    width: '100%',
  },
  '.wrap': {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: theme.typography.fontSizeGlobal,
    fontWeight: theme.typography.fontWeightMedium,
    padding: '15px',
  },
});

export default globalStyles;

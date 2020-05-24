import { createUseStyles } from 'react-jss';

const ModalStyles = (theme) => ({
  Modal__background: {
    backgroundColor: theme.palette.background.modal,
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
  },
  Modal__root: {
    width: '770px',
    textAlign: 'center',
    backgroundColor: theme.palette.background.paper,
    padding: '20px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 1,
    borderRadius: '4px',
    color: theme.palette.text.main,
  },
});

export default createUseStyles(ModalStyles, { name: 'Modal', index: 307 });

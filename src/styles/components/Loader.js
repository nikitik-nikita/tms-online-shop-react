import { createUseStyles } from 'react-jss';

const loaderStyles = {
  loader: {
    display: 'flex',
    position: 'absolute',
    width: '100%',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, .5)',
    zIndex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loader__child: {
    height: '100%',
    display: 'flex -webkit-box',
    '-webkit-box-align': 'center',
    alignItems: 'center',
    '-webkit-box-pack': 'center',
    justifyContent: 'center',
  },
  ice__cream: {
    flavor: {
      position: 'relative',
      width: '150px',
      height: '200px',
      borderRadius: '80px 80px 10px 10px',
      overflow: 'hidden',
      '&$after': {
        content: '',
        position: 'absolute',
        left: '21px',
        bottom: '20px',
        width: '20px',
        height: '170px',
        borderRadius: '50px',
        background: 'rgba(255, 255, 255, 0.5)',
      },
      flavours: {
        position: 'relative',
        top: '0%',
        left: '-20%',
        width: '140%',
        height: '120%',
        backgroundImage: '-webkit-gradient(linear, left bottom, left top, color-stop(25%, #f63a99), color-stop(25%, #30dcf6), color-stop(25%, #30dcf6), color-stop(50%, #30dcf6), color-stop(50%, #f2d200), color-stop(50%, #f2d200), color-stop(75%, #f2d200), color-stop(75%, #70ca5c)), linear-gradient(0deg, #f63a99 25%, #30dcf6 25%, #30dcf6 25%, #30dcf6 50%, #f2d200 50%, #f2d200 50%, #f2d200 75%, #70ca5c 75%)',
        backgroundPosition: '0, 0',
        backgroundRepeat: 'repeat-y',
        '-webkit-animation': 'flavours 100s linear infinite',
        animation: 'flavours 100s linear infinite',
        '-webkit-transform': 'rotate(155deg)',
        transform: 'rotate(155deg)',
      },
    },
    stick: {
      width: '57px',
      height: '86px',
      background: '#E09C5F',
      borderRadius: '0 0 25px 25px',
      display: 'block',
      margin: '0 auto',
      '&$after': {
        display: 'block',
        content: '',
        width: '100%',
        height: '24px',
        background: '#8D613B',
      },
      after: {},
    },
  },
  '@-webkit-keyframes flavours': {
    to: {
      backgroundPosition: '0 -1000vh',
    },
  },
  '@keyframes flavours': {
    to: {
      backgroundPosition: '0 -1000vh',
    },
  },
};

export default createUseStyles(loaderStyles, { name: 'Loader' });

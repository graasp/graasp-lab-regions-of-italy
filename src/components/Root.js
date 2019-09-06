import React from 'react';
import PropTypes from 'prop-types';
import { I18nextProvider } from 'react-i18next';
import { connect } from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { ToastContainer } from 'react-toastify';
import pink from '@material-ui/core/colors/pink';
import grey from '@material-ui/core/colors/grey';
import orange from '@material-ui/core/colors/orange';
import 'react-toastify/dist/ReactToastify.css';
import Header from './layout/Header';
import i18nConfig from '../config/i18n';
import App from './App';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#5050d2',
    },
    secondary: pink,
    default: grey,
    background: {
      paper: '#fff',
    },
  },
  status: {
    danger: {
      background: orange,
      color: '#fff',
    },
  },
  typography: {
    useNextVariants: true,
  },
});

const Root = ({ offline }) => (
  <MuiThemeProvider theme={theme}>
    <I18nextProvider i18n={i18nConfig}>
      {offline ? null : <Header />}
      <App />
      <ToastContainer />
    </I18nextProvider>
  </MuiThemeProvider>
);

const mapStateToProps = ({ context }) => ({
  offline: context.offline,
});

Root.propTypes = {
  offline: PropTypes.bool,
};

Root.defaultProps = {
  offline: false,
};

export default connect(mapStateToProps)(Root);

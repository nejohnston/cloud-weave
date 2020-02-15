import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './redux/store';

import ProjectsContainer from './containers/ProjectsContainer';

import * as serviceWorker from './serviceWorker';

import './index.css';
import Layout from './components/Layout';
import AboutContainer from './containers/AboutContainer';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core';

const theme = React.useMemo(
  () =>
    createMuiTheme({
      palette: {
        type: prefersDarkMode ? 'dark' : 'light'
      }
    }),
  [ prefersDarkMode ]
);

const Portfolio = () => (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <Layout>
        <AboutContainer />
        <ProjectsContainer />
      </Layout>
    </Provider>
  </ThemeProvider>
);

ReactDOM.render(<Portfolio />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch, Link, Redirect } from 'react-router';
import { Provider } from 'react-redux';
import 'typeface-roboto';

import store from './redux/store';

import ProjectsContainer from './containers/ProjectsContainer';

import * as serviceWorker from './serviceWorker';

import './index.scss';
import Layout from './components/Layout';
import AboutContainer from './containers/AboutContainer';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core';

// const theme = createMuiTheme({
//   palette: {
//     primary: {
//       // light: will be calculated from palette.primary.main,
//       main: '#ff4400'
//       // dark: will be calculated from palette.primary.main,
//       // contrastText: will be calculated to contrast with palette.primary.main
//     },
//     secondary: {
//       light: '#0066ff',
//       main: '#0044ff',
//       // dark: will be calculated from palette.secondary.main,
//       contrastText: '#ffcc00'
//     },
//     // Used by `getContrastText()` to maximize the contrast between
//     // the background and the text.
//     contrastThreshold: 3,
//     // Used by the functions below to shift a color's luminance by approximately
//     // two indexes within its tonal palette.
//     // E.g., shift from Red 500 to Red 300 or Red 700.
//     tonalOffset: 0.2
//   }
// });

const Portfolio = () => (
  <Provider store={store}>
    <Router>
      <Layout>
        <Switch>
          <Route exact path='/' component={AboutContainer} />
          <Route exact path='/projects' component={ProjectsContainer} />
        </Switch>
      </Layout>
    </Router>
  </Provider>
);

ReactDOM.render(<Portfolio />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();

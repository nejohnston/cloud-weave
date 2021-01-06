import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import 'typeface-roboto';

import store from './redux/store';

import ProjectsContainer from './containers/ProjectsContainer';

import * as serviceWorker from './serviceWorker';

import './index.scss';
import Layout from './components/Layout';
import AboutContainer from './containers/AboutContainer';

import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import theme from "./config/theme";

const Portfolio = () => (
    <MuiThemeProvider theme={theme}>
      <Provider store={store}>
        <Layout>
          <AboutContainer />
          <ProjectsContainer />
        </Layout>
      </Provider>
    </MuiThemeProvider>
);

ReactDOM.render(<Portfolio />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

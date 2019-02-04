import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Provider } from 'react-redux';

import PortfolioContainer from './containers/PortfolioContainer';

import * as serviceWorker from './serviceWorker';

import './index.css';
import Layout from './components/Layout';
import AboutContainer from './containers/AboutContainer';

const Portfolio = () => (
  <Provider>
    <Router>
      <Layout>
        {/* <Switch>
          <Route exact path='/portfolio' component={PortfolioContainer} />
          <Route exact path='/about' component={AboutContainer} />
        </Switch> */}
        <AboutContainer />
        <PortfolioContainer />
      </Layout>
    </Router>
  </Provider>
);

ReactDOM.render(<Portfolio />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

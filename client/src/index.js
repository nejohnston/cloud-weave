import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './index.css';
import Provider from 'react-dom';
import PortfolioContainer from './containers/PortfolioContainer';
import * as serviceWorker from './serviceWorker';

const Portfolio = () => (
  <Provider>
    <Router>
      <Switch>
        <Route exact pather='/' component={PortfolioContainer} />
      </Switch>
    </Router>
    <PortfolioContainer />
  </Provider>
);

ReactDOM.render(<Portfolio />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

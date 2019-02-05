import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Provider } from 'react-redux';

import ProjectsContainer from './containers/ProjectsContainer';

import * as serviceWorker from './serviceWorker';

import './index.css';
import Layout from './components/Layout';
import AboutContainer from './containers/AboutContainer';

const Portfolio = () => (
  <Provider>
    <Router>
      <Layout>
        {/* <Switch>
          <Route exact path='/portfolio' component={ProjectsContainer} />
          <Route exact path='/about' component={AboutContainer} />
        </Switch> */}
        <AboutContainer />
        <ProjectsContainer />
      </Layout>
    </Router>
  </Provider>
);

ReactDOM.render(<Portfolio />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

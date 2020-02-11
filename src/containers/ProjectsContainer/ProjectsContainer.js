import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Projects from './Projects';
import { fetchProjects } from '../../redux/modules/projects';
import './styles.css';
import firebase from 'firebase';

class ProjectsContainer extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    var config = {
      apiKey: 'AIzaSyDT3UHIOnWQ8bBk2EUdLOYq0XfQbYaDJ8A',
      authDomain: 'portfolio-c50b3.firebaseapp.com',
      databaseURL: 'https://portfolio-c50b3.firebaseio.com',
      projectId: 'portfolio-c50b3',
      storageBucket: 'portfolio-c50b3.appspot.com',
      messagingSenderId: '977496555049',
      appId: '1:977496555049:web:871deeb0d6d04d8a772638',
      measurementId: 'G-0FCK4BP20R'
    };
    firebase.initializeApp(config);
    firebase
      .database()
      .ref('users/001')
      .set({
        name: 'noor adam',
        age: 45
      })
      .then(() => {
        console.log('inserted');
      })
      .catch((error) => {
        console.log('error');
      })
      .then(() => {
        firebase.database().ref('projects').on('value', (snapshot) => {
          this.setState({
            language: snapshot.val().language
          });
        });
      });
  }

  componentDidMount() {
    this.props.dispatch(fetchProjects());
  }
  render() {
    return (
      <div>
        <Projects data={this.props.projectData} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.projects.isLoading,
  projectData: state.projects.projectData,
  error: state.projects.error
});

ProjectsContainer.propTypes = {
  projectData: PropTypes.array,
  dispatch: PropTypes.func,
  isLoading: PropTypes.bool
};

export default connect(mapStateToProps)(ProjectsContainer);

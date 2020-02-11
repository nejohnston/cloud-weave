import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Paper } from '@material-ui/core';

const Projects = ({ data }) => (
  <div>
    <Grid container>
      <Grid item>
        <Grid container justify='center'>
          {data.map((data, i) => (
            <Grid key={i} item>
              <Paper>{data.language}</Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  </div>
);

Projects.propTypes = {
  projectData: PropTypes.array,
  require: PropTypes.func
};

export default Projects;

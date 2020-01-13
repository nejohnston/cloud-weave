import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Paper } from '@material-ui/core';

const Projects = ({ projectData }) => {
  return (
    <div>
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Grid container justify='center' spacing={spacing}>
            {data.map((data, i) => (
              <Grid key={value} item>
                <Paper className={classes.paper} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

Projects.propTypes = {
  projectData: PropTypes.array,
  require: PropTypes.func
};

export default Projects;

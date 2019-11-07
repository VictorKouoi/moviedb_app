import React from 'react';
import _ from 'lodash';
import { Grid, withStyles } from '@material-ui/core';
import Poster from '../../Containers/Poster/index';

const List = ({ classes, movieList }) => {
  const list = [];

  movieList.forEach(m => {
    m && list.push(
      <Poster {...m} />
    )
  });

  return (
    <div className={classes.container}>
      {
        _.isEmpty(list) ? 
        <div className={classes.emptyListMessage}>Pas de films</div>
        :
        <Grid container spacing={0}>
          {list}
        </Grid>
      }
    </div>
  );
};

const styles = {
  constainer: {
    padding: 20
  },
  emptyListMessage: {
    color: 'white',
    fontWeight: 'bold'
  }
};

export default withStyles(styles)(List);
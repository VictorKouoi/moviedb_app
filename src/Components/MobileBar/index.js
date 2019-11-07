import React from 'react';
import {
  Button, Drawer,
  withStyles
} from '@material-ui/core';

const MobileBar = ({ classes, firstButton, secondButton, isDrawerOpen }) => {
  return (
    <div className={classes.container}>
      <div className={classes.title}>
          MovieDB App
      </div>
      <Drawer
        variant="persistent"
        anchor="left"
        open={isDrawerOpen}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.buttonContainer}>
          <Button
            color="secondary"
            onClick={firstButton}
          >
            <div className={classes.buttonText}>Tous les films</div>
          </Button>
          <Button
            color="secondary"
            onClick={secondButton}
          >
            <div className={classes.buttonText}>Ma liste</div>
          </Button>
        </div>
      </Drawer>
    </div>
  );
}

const styles = () => ({
  container: {
    margin: 20
  },
  title: {
    color: '#f50057',
    fontSize: 20,
    fontWeight: 'bold'
  },
  drawerPaper: {
    width: 150,
    backgroundColor: '#1e272e',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 30
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#f50057'
  },
  buttonContainer: {
    marginTop: 20
  }
});

export default withStyles(styles)(MobileBar);
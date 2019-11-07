import React from 'react';
import {
  AppBar, Toolbar, Button,
  withStyles
} from '@material-ui/core';

const WebBar = (props) => {
  const {
    classes,
    popularListDirection,
    watchListDirection,
    selectedList,
    setOrderList,
    firstButton,
    secondButton
  } = props;

  const newOrderForPopular = popularListDirection === 'asc' ? 'desc' : 'asc';
  const newOrderForWatchlist = watchListDirection === 'asc' ? 'desc' : 'asc';

  return (
    <AppBar className={classes.tabContainer} position="sticky">
      <Toolbar className={classes.barContainer}>
        <div>
          <Button
            className={classes.buttonContainer}
            variant={selectedList === 'popular' ? "contained" : 'outlined'}
            color="secondary"
            onClick={firstButton}
          >
            <div className={classes.buttonText}>Tous les films</div>
          </Button>
          <Button
            className={classes.buttonContainer}
            variant={selectedList === 'popular' ? "outlined" : 'contained'}
            color="secondary"
            onClick={secondButton}
          >
            <div className={classes.buttonText}>Ma liste</div>
          </Button>
        </div>
        <div className={classes.titleStyle}>MovieDB App</div>
        <Button
          variant="contained"         
          color="secondary"
          onClick={() => setOrderList(selectedList, selectedList === 'popular' ? newOrderForPopular : newOrderForWatchlist)}
        >
          <div className={classes.buttonText}>
            { popularListDirection === 'asc' ?
              'Afficher les plus récents'
              : 'Afficher les plus anciens' }
          </div>
        </Button>
      </Toolbar>
    </AppBar>
  );
}

const styles = () => ({
  tabContainer: {
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: 'black'
  },
  titleStyle: {
    color: '#f50057',
    fontSize: 40,
    fontWeight: 'bold'
  },
  barContainer: {
    backgroundColor: 'black',
    justifyContent: 'space-between'
  },
  buttonText: {
    fontWeight: 'bold'
  },
  buttonContainer: {
    cursor: 'pointer',
    marginRight: 10
  }
});

export default withStyles(styles)(WebBar);
import React, { useEffect, useState } from 'react';
import {
  CircularProgress, withWidth,
  withStyles
} from '@material-ui/core';

import List from '../List/index';
import MobileBar from '../MobileBar/index';
import MovieCard from '../../Containers/MovieCard/index';
import WebBar from '../../Containers/WebBar/index';
import MobileCard from '../../Containers/MobileCard/index';
import MenuIcon from '@material-ui/icons/Menu';

const Viewer = (props) => {
  const {
    classes,
    width,

    loadData,
    isLoading,
    errorMessage,

    selectedList,

    selectedMovie,
    resetSelectedMovie,

    popularMovies,
    watchList,
    setList
  } = props;

  useEffect(() => { loadData() }, []); //eslint-disable-line
  const [isOpen, setOpen] = useState(false);

  return (
    <div className={classes.container}>
      {width === 'xs' ?
        <MobileBar
          isDrawerOpen={isOpen}
          firstButton={() => setList('popular')}
          secondButton={() => setList('watchList')}
        />
        : 
        <WebBar
          firstButton={() => setList('popular')}
          secondButton={() => setList('watchList')}
        />     
      }
      {errorMessage &&
        <div className={classes.errorMessageStyle}>{errorMessage}</div>
      }
      {
        isLoading ? <CircularProgress /> :
        <div className={classes.listContainer}>
          { selectedList === 'popular' ? 
          <List movieList={popularMovies} />
          : <List movieList={watchList} /> }
        </div>
      }
      {width === 'xs' ?
        <MobileCard isOpen={selectedMovie} onClose={() => resetSelectedMovie(null)}/>
        :<MovieCard open={selectedMovie} onClose={() => resetSelectedMovie(null)}/>
      }
      {width === 'xs' &&
        <div className={classes.menuButton} onClick={() => setOpen(!isOpen)} >
          <MenuIcon color='inherit' fontSize='large' />
        </div>
      }
    </div>
  )
};

const styles = () => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  listContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row'
  },
  errorMessageStyle: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 30
  },
  menuButton: {
    position: 'fixed',
    bottom: 30,
    right: 30,
    borderRadius: '50%',
    backgroundColor: '#f50057',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5
  }
});

export default withWidth()(withStyles(styles)(Viewer));
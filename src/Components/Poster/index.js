import React from 'react';
import { withStyles } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';

const Poster = (props) => {
  const {
    classes,

    id,
    poster_path,
    isAdded,
    
    addToWatchList,
    removeFromWatchList,
    selectMovie,
    getSimilarMovies
  } = props;

  const posterPath=`http://image.tmdb.org/t/p/w200//${poster_path}`;

  return (
    <div className={classes.container}>
      <img
        alt={id}
        src={posterPath}
        onClick={() => {
          selectMovie(props);
          getSimilarMovies(id);
        }}  
      />
      <div className={classes.iconContainer}>
        <FavoriteIcon
          fontSize='large'
          color={isAdded ? "error" : "inherit"}
          onClick={() => isAdded ?
            removeFromWatchList({...props, isAdded: false})
            : addToWatchList({...props, isAdded: true})}
        />
      </div>
    </div>
  );
}

const styles = {
  container: {
    cursor: 'pointer',
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10
  },
  iconContainer: {
    position: 'relative',
    bottom: 40,
    left: 70
  }
}

export default withStyles(styles)(Poster);
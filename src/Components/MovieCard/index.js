import React from 'react';
import _ from 'lodash';
import { Dialog, CircularProgress, withStyles } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import FavoriteIcon from '@material-ui/icons/Favorite';
import moment from 'moment';

const MovieCard = (props) => {
  const {
    classes,

    open,
    onClose,

    id,
    original_title,
    overview,
    release_date,
    poster_path,
    isAdded,
    vote_average,
    rating,
    
    removeFromWatchList,
    addToWatchList,
    setSelectedMovieStatus,
    similarMovies,
    setMovieRating,
    isLoading,
    getSelectedMovie,
    selectMovie,
    popularMovies,
    getSimilarMovies
  } = props;

  const posterPath = `http://image.tmdb.org/t/p/w342//${poster_path}`;

  const removeAndSet = () => {
    removeFromWatchList({...props, isAdded: false});
    setSelectedMovieStatus({...props, isAdded: false});
  };

  const addAndSet = () => {
    addToWatchList({...props, isAdded: true});
    setSelectedMovieStatus({...props, isAdded: true});
  };

  const onSelect = async (movie) => {
    if (popularMovies.some(m => m.id === movie.id)) {
      const selectedFilm = popularMovies.find(m => m.id === movie.id);
      await selectMovie(selectedFilm);
    } else {
      await getSelectedMovie(movie.id);
    }
    getSimilarMovies(movie.id) //Pour actualiser la liste des suggestions
  };

  const similarList = [];

  similarMovies.forEach(movie => {
    similarList.push((
      <div className={classes.minPosterContainer} onClick={() => onSelect(movie)}>
        <img
          alt={movie.id}
          src={`http://image.tmdb.org/t/p/w92//${movie.poster_path}`}
        />
      </div>
    ))
  });

  const toDisplay = _.isEmpty(similarList) ? <div className={classes.corpus}>Pas de films similaires !</div> : similarList

  return (
    <Dialog fullScreen open={open} onClose={onClose}>
      <div className={classes.paper}>
        <HighlightOffIcon color="secondary" fontSize="large" onClick={onClose} className={classes.closeButton} />
        <div className={classes.container}>
          <img
            alt={id}
            src={posterPath}
          />
          <div className={classes.infoContainer}>
            <div className={classes.title}>{original_title}</div>
            <div className={classes.subtitle}>Date de sortie : {moment(release_date).format('DD/MM/YYYY')}</div>
            <div className={classes.corpus}>{overview}</div>
            <div className={classes.ratingContainer} onClick={() => isAdded ? removeAndSet() : addAndSet()}>
              <div className={classes.legend}>Ajouter à ma liste</div>
              <FavoriteIcon
                className={classes.cursor}
                color={isAdded ? "error" : "inherit"}
              />
            </div>
            <div className={classes.ratingContainer}>
              <div className={classes.legend}>Ma note</div>
              <Rating
                precision={0.5}
                className={classes.cursor}
                name="simple-controlled"
                value={rating}
                onChange={(e, newValue) => {
                  setMovieRating({
                    id,
                    original_title,
                    overview,
                    release_date,
                    poster_path,
                    isAdded,
                    vote_average,
                    rating: newValue
                  });
                }}
              />
            </div>
            <div className={classes.ratingContainer}>
              <div className={classes.legend}>Note MovieDB</div>
              <Rating
                precision={0.5}
                className={classes.cursor}
                readOnly
                name="simple-controlled"
                value={vote_average}
              />
            </div>
            <div className={classes.similarContainer}>
              { isLoading ? <CircularProgress /> : toDisplay }
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  );
}

const styles = {
  paper: {
    backgroundColor: '#121212',
    height: '100%'
  },
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  infoContainer: {
    margin: 20,
    width: 600,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#f50057',
    borderWidth: 5,
    border: 'solid',
    padding: 30
  },
  similarContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 15
  },
  ratingContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 15,
    alignItems: 'center'
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center'
  },
  subtitle: {
    fontSize: 15,
    marginTop: 15,
    marginBottom: 15,
    color: 'white'
  },
  corpus: {
    fontSize: 15,
    textAlign: 'justify',
    color: 'white'
  },
  legend: {
    fontSize: 15,
    textAlign: 'justify',
    color: 'white',
    marginRight: 5
  },
  cursor: {
    cursor: 'pointer'
  },
  minPosterContainer: {
    marginRight: 10,
    cursor: 'pointer'
  },
  closeButton: {
    cursor: 'pointer',
    margin: 20
  }
}

export default withStyles(styles)(MovieCard);
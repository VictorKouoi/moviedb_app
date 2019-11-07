import {
  GET_MOVIES_ATTEMPT,
  GET_MOVIES_FAIL,
  GET_MOVIES_SUCCESS,

  GET_SIMILAR_MOVIES_ATTEMPT,
  GET_SIMILAR_MOVIES_FAIL,
  GET_SIMILAR_MOVIES_SUCCESS,

  GET_SELECTED_MOVIE_ATTEMPT,
  GET_SELECTED_MOVIE_FAIL,
  GET_SELECTED_MOVIE_SUCCESS,

  ADD_TO_WATCHLIST,
  REMOVE_FROM_WATCHLIST,

  SET_ORDER_LIST,
  SET_LIST,

  SELECT_MOVIE,
  RESET_SELECTED_MOVIE,
  SET_SELECTED_MOVIE_STATUS,

  SET_MOVIE_RATING
} from './constants';

const getMoviesAttempt = () => ({
  type: GET_MOVIES_ATTEMPT
});

const getMoviesFail = (errorMessage) => ({
  type: GET_MOVIES_FAIL,
  errorMessage
});

const getMoviesSuccess = (payload) => ({
  type: GET_MOVIES_SUCCESS,
  payload
});

const getSimilarMoviesAttempt = () => ({
  type: GET_SIMILAR_MOVIES_ATTEMPT
});

const getSimilarMoviesFail = (errorMessage) => ({
  type: GET_SIMILAR_MOVIES_FAIL,
  errorMessage
});

const getSimilarMoviesSuccess = (payload) => ({
  type: GET_SIMILAR_MOVIES_SUCCESS,
  payload
});

const getSelectedMovieAttempt = () => ({
  type: GET_SELECTED_MOVIE_ATTEMPT
});

const getSelectedMovieFail = (errorMessage) => ({
  type: GET_SELECTED_MOVIE_FAIL,
  errorMessage
});

const getSelectedMovieSuccess = (movieInfo) => ({
  type: GET_SELECTED_MOVIE_SUCCESS,
  movieInfo
});

const addToWatchList = (movie) => ({
  type: ADD_TO_WATCHLIST,
  movie
});

const removeFromWatchList = (movie) => ({
  type: REMOVE_FROM_WATCHLIST,
  movie
});

const setOrderList = (name, direction) => ({
  type: SET_ORDER_LIST,
  name,
  direction
});

const setList = (name) => ({
  type: SET_LIST,
  name
}); 

const selectMovie = (movieInfo) => ({
  type: SELECT_MOVIE,
  movieInfo
});

const resetSelectedMovie = () => ({
  type: RESET_SELECTED_MOVIE
});

const setSelectedMovieStatus = (movie) => ({
  type: SET_SELECTED_MOVIE_STATUS,
  movie
});

const setMovieRating = (movie) => ({
  type: SET_MOVIE_RATING,
  movie
});

export default {
  getMoviesAttempt,
  getMoviesFail,
  getMoviesSuccess,

  getSimilarMoviesAttempt,
  getSimilarMoviesFail,
  getSimilarMoviesSuccess,

  getSelectedMovieAttempt,
  getSelectedMovieFail,
  getSelectedMovieSuccess,

  addToWatchList,
  removeFromWatchList,
  
  setOrderList,
  setList,

  selectMovie,
  resetSelectedMovie,
  setSelectedMovieStatus,

  setMovieRating
};

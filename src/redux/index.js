import axios from 'axios';
import actions from './actions';

const apiKey = 'ac5f233e9b1ffda899bc1603606b1142';
const choosenLanguage = 'fr-FR';

export const getPopularMovies = (page = 1) => {
  return (dispatch) => {
    dispatch(actions.getMoviesAttempt());
    return axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=${choosenLanguage}&page=${page}`)
    .then((response) =>{
      const { data } = response;
      dispatch(actions.getMoviesSuccess(data));
      return response;
    })
    .catch((error) => {
      dispatch(actions.getMoviesFail(error.response));
      throw error;
    })
  } 
};

export const getSimilarMovies = (movieId) => {
  return (dispatch) => {
    dispatch(actions.getSimilarMoviesAttempt());
    return axios.get(`https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=${apiKey}&language=${choosenLanguage}&page=1`)
    .then((response) =>{
      const { data } = response;
      dispatch(actions.getSimilarMoviesSuccess(data));
      return response;
    })
    .catch((error) => {
      dispatch(actions.getSimilarMoviesFail(error.response));
      throw error;
    })
  } 
};

export const getSelectedMovie = (movieId) => {
  return (dispatch) => {
    dispatch(actions.getSelectedMovieAttempt());
    return axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=${choosenLanguage}`)
    .then((response) =>{
      const { data } = response;
      dispatch(actions.getSelectedMovieSuccess(data));
      return response;
    })
    .catch((error) => {
      dispatch(actions.getSelectedMovieFail(error.response.data.status_message));
      throw error;
    })
  } 
};

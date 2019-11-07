import { connect } from 'react-redux';
import _ from 'lodash';
import MovieCard from '../../Components/MovieCard';
import {
  getSelectedMovie as getSelectedMovieThunk,
  getSimilarMovies as getSimilarMoviesThunk
} from '../../redux/index';
import actions from '../../redux/actions';

const mapStateToProps = state => ({
  popularMovies: state.listing.popular.list || [],
  id: _.get(state, 'listing.selectedMovie.information.id'),
  original_title: _.get(state, 'listing.selectedMovie.information.original_title'),
  release_date: _.get(state, 'listing.selectedMovie.information.release_date'),
  overview: _.get(state, 'listing.selectedMovie.information.overview'),
  poster_path: _.get(state, 'listing.selectedMovie.information.poster_path'),
  isAdded: _.get(state, 'listing.selectedMovie.information.isAdded'),
  similarMovies: _.get(state, 'listing.similar.list', []).slice(0, 6),
  rating: _.get(state, 'listing.selectedMovie.information.rating'),
  isLoading: state.listing.similar.isLoading,
  vote_average: Math.round(_.get(state, 'listing.selectedMovie.information.vote_average', 0)/2)
});

const mapDispatchToProps = dispatch => ({
  addToWatchList: (movie) => dispatch(actions.addToWatchList(movie)),
  removeFromWatchList: (movie) => dispatch(actions.removeFromWatchList(movie)),
  setSelectedMovieStatus: (movie) => dispatch(actions.setSelectedMovieStatus(movie)),
  setMovieRating: (movie) => dispatch(actions.setMovieRating(movie)),
  getSelectedMovie: (id) => dispatch(getSelectedMovieThunk(id)),
  selectMovie: (info) => dispatch(actions.selectMovie(info)),
  getSimilarMovies: (movieId) => dispatch(getSimilarMoviesThunk(movieId))
});

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...stateProps,
  ...dispatchProps,
  ...ownProps
});

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(MovieCard);

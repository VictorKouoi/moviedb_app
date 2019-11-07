import { connect } from 'react-redux';
import Poster from '../../Components/Poster';
import {
  getSimilarMovies as getSimilarMoviesThunk
} from '../../redux/index';
import actions from '../../redux/actions';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  addToWatchList: (movie) => dispatch(actions.addToWatchList(movie)),
  removeFromWatchList: (movie) => dispatch(actions.removeFromWatchList(movie)),
  getSimilarMovies: (movieId) => dispatch(getSimilarMoviesThunk(movieId)),
  selectMovie: (movieInfo) => dispatch(actions.selectMovie(movieInfo))
});

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...stateProps,
  ...dispatchProps,
  ...ownProps
});

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Poster);

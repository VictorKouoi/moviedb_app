import { connect } from 'react-redux';
import Viewer from '../../Components/Viewer';
import {
  getPopularMovies as getPopularMoviesThunk,
} from '../../redux/index';
import actions from '../../redux/actions';

const mapStateToProps = state => ({
  isLoading: state.listing.popular.isLoading,
  errorMessage: state.listing.popular.errorMessage,
  popularMovies: state.listing.popular.list || [],
  watchList: state.listing.watchList.list || [],
  popularListDirection: state.listing.popular.direction,
  watchListDirection: state.listing.watchList.direction,
  selectedMovie: state.listing.selectedMovie.information,
  selectedList: state.listing.selectedList
});

const mapDispatchToProps = dispatch => ({
  getPopularMovies: (pageIndex) => dispatch(getPopularMoviesThunk(pageIndex)),
  setOrderList: (name, direction) => dispatch(actions.setOrderList(name, direction)),
  resetSelectedMovie: () => dispatch(actions.resetSelectedMovie()),
  setList: name => dispatch(actions.setList(name))
});

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { getPopularMovies } = dispatchProps;
  return {
    ...stateProps,
    ...dispatchProps,
    ...ownProps,
    loadData: async () => {
      for (var i=1; i < 10; i++) {
        await getPopularMovies(i);
      }
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Viewer);

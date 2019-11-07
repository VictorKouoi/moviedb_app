import { connect } from 'react-redux';
import _ from 'lodash';
import MobileCard from '../../Components/MobileCard';

const mapStateToProps = state => ({
  popularMovies: state.listing.popular.list || [],
  id: _.get(state, 'listing.selectedMovie.information.id'),
  original_title: _.get(state, 'listing.selectedMovie.information.original_title'),
  release_date: _.get(state, 'listing.selectedMovie.information.release_date'),
  overview: _.get(state, 'listing.selectedMovie.information.overview'),
  poster_path: _.get(state, 'listing.selectedMovie.information.poster_path'),
  vote_average: Math.round(_.get(state, 'listing.selectedMovie.information.vote_average', 0)/2)
});

const mapDispatchToProps = () => ({});

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...stateProps,
  ...dispatchProps,
  ...ownProps
});

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(MobileCard);

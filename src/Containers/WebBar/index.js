import { connect } from 'react-redux';
import WebBar from '../../Components/WebBar';
import actions from '../../redux/actions';

const mapStateToProps = state => ({
  popularListDirection: state.listing.popular.direction,
  watchListDirection: state.listing.watchList.direction,
  selectedList: state.listing.selectedList
});

const mapDispatchToProps = dispatch => ({
  setOrderList: (name, direction) => dispatch(actions.setOrderList(name, direction))
});

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return {
    ...stateProps,
    ...dispatchProps,
    ...ownProps
  }
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(WebBar);

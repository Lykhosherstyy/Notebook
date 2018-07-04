import { connect } from 'react-redux';

import { setFilter } from '../actions';

import FilterLInk from '../components/FilterLInk.jsx';

function mapStateToProps(state, ownProps) {
  return {
    active: ownProps.filter === state.filter
  };
}

function mapDisplatchToProps(dispatch, ownProps) {
  return {
    onClick: () => dispatch(setFilter(ownProps.filter))
  };
}

export default connect(mapStateToProps, mapDisplatchToProps)(FilterLInk);
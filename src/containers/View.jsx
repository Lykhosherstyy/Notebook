import { connect } from 'react-redux';

import { setView } from '../actions';

import ViewLink from '../components/ViewLink.jsx';

function mapStateToProps(state, ownProps) {
  return {
    active: ownProps.view === state.view
  };
}

function mapDisplatchToProps(dispatch, ownProps) {
  return {
    onClick: () => dispatch(setView(ownProps.view))
  };
}

export default connect(mapStateToProps, mapDisplatchToProps)(ViewLink);
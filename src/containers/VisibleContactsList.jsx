import { connect } from 'react-redux';

import ContactList from '../components/ContactList.jsx';

import { toogleFavorite } from '../actions';


function getFavoriteContacts(contacts, filter) {
  switch (filter) {
    case 'SHOW_FAVORITE': {
      return contacts.filter(contact => contact.favorite);
    }
    default: {
      return contacts;
    }
  }
}

function mapStateToProps(state) {
  return {
    contacts: getFavoriteContacts(state.contacts, state.filter),
    view: state.view
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onFavoriteContact: (id) => dispatch(toogleFavorite(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
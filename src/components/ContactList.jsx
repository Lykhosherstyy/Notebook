import React, { Component } from 'react';

import classNames from 'classnames';

import Contact from './Contact.jsx';
import EmptyList from './EmptyList.jsx';

import styles from './ContactsList.scss';

export default class ContactList extends Component {
  render() {
    const { contacts, onFavoriteContact, view } = this.props;

    const styleContainer = classNames(
      styles.root,
      (styles.list),
      (view === 'SHOW_GRID' && styles.grid)
    );

    const list = contacts.map(contact => (
      <Contact
        key={contact.id}
        id={contact.id}
        name={contact.name}
        email={contact.email}
        lastname={contact.lastName}
        phone={contact.phone}
        favorite={contact.favorite}
        onToggleFavorite={onFavoriteContact}
      />
    ));

    return (
      <div className={styleContainer} >
        {
          contacts.length
            ?
            list
            :
            <EmptyList className={styles.emptyList}>
              No contacts yet.
            </EmptyList>
        }
      </div>
    );
  }
}
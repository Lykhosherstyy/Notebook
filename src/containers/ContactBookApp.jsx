import React, { Component }   from 'react';

import AddContact from './AddContact.jsx';
import ContactList from './VisibleContactsList.jsx';
import ControlPanel from './ControlPanel.jsx';

import styles from './ContactBookApp.scss';

export default class ContactBookApp extends Component {
  render() {
    return (
      <div className={styles.app_container} >
        <div>
          <h1 className={styles.title} >Contactbook</h1>
          <div>
            <AddContact />
            <ControlPanel />
            <ContactList />
          </div>
        </div>
      </div>
    );
  }
}
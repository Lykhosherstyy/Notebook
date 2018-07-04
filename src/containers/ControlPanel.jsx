import React, { Component }   from 'react';

import { ViewListIcon, ViewGridIcon } from 'mdi-react';

import Filter from './Filter.jsx';
import View from './View.jsx';

import styles from './ControlPanel.scss';

export default class ControlPanel extends Component {
  render() {
    return (
      <div className={styles.root}>
        <div>
          <Filter filter='SHOW_ALL'>All</Filter>
          <Filter filter='SHOW_FAVORITE'>Favorite</Filter>
        </div>
        <div>
          <View view='SHOW_LIST'><ViewListIcon size='24' /></View>
          <View view='SHOW_GRID'><ViewGridIcon size='24' /></View>
        </div>
      </div>
    );
  }
}
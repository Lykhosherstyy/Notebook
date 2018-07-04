import React, { Component } from 'react';

import styles from './FilterLink.scss';

import classNames from 'classnames';

export default class FilterLink extends Component {
  render() {
    const { active, children, onClick } = this.props;

    if (active) {
      return <span className={classNames(styles.root, styles.active)}>{children}</span>;
    }

    return <span className={styles.root} onClick={onClick}>{children}</span>;
  }
}
import React, { Component } from 'react';

import classNames from 'classnames';

import styles from './ViewLink.scss';

export default class ViewLink extends Component {
  render() {
    const { active, children, onClick } = this.props;

    if (active) {
      return <span className={classNames(styles.root, styles.active)}>{children}</span>;
    }

    return <span className={styles.root} onClick={onClick}>{children}</span>;
  }
}
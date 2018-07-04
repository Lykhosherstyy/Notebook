import React, { Component } from 'react';

import classNames from 'classnames';

import { StarIcon } from 'mdi-react';

import styles from './Contact.scss';

export default class Contact extends Component {
  handleFavorite = () => {
    const { onToggleFavorite, id } = this.props;

    onToggleFavorite(id);
  }
  render() {
    const { name, email, lastname, phone, favorite } = this.props;
    const styleItem = classNames(
      'item',
      'card'
    );
    const styleButton = classNames(
      styles.button,
      'button'
    );

    return (
      <div className={styleItem}>
        <p className={styles.name}>{name}</p>
        <p>{lastname}</p>
        <p>{email}</p>
        <p>{phone}</p>
        <div className='panel'>
          <button
            className={styles.favorite}
            onClick={this.handleFavorite}
            title='favorite'
          >
            <StarIcon className={favorite ? styles.starActive : styles.star} size='16' />
          </button>
          <a
            href={`tel:${phone}`}
            className={styleButton}
            target='_blank'
            title='Call'
          >
            Call
          </a>
        </div>
      </div>
    );
  }
}
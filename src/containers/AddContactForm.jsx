import React, { Component }  from 'react';
import { Field } from 'redux-form';

import classNames from 'classnames';
import { createTextMask  } from 'redux-form-input-masks';

import AddButton from '../components/AddButton.jsx';

import styles from './AddContactForm.scss';

const phoneMask = createTextMask({
  pattern: '(999)999-9999'
});

const renderField = ({
  input,
  label,
  type,
  className,
  meta: { touched, error }
}) => (
  <div className={styles.formGroup}>
    <label className='required'>{label}</label>
    <div>
      <input {...input} type={type} className={className} />
      {touched && (error && <span className='error'>{error}</span>)}
    </div>
  </div>
);

export default class AddContactForm extends Component  {
  render() {
    const { handleSubmit } = this.props;
    const styleForm = classNames(styles.root, 'card');
    const styleButton = classNames(styles.addButton, 'button');

    return (
      <form className={styleForm} onSubmit={handleSubmit}>
        <Field
          className={styles.addContact_field}
          name='name'
          component='input'
          type='text'
          component={renderField}
          label='username'
        />
        <Field
          className={styles.addContact_field}
          name='lastName'
          component='input'
          type='text'
          component={renderField}
          label='lastName'
        />
        <Field
          className={styles.addContact_field}
          name='email'
          component='input'
          type='email'
          component={renderField}
          label='Email'
        />
        <Field
          className={styles.addContact_field}
          name='phone'
          component='input'
          type='tel'
          component={renderField}
          label='Phone'
          {...phoneMask}
        />
        <AddButton type='submit' btnText='Add' className={styleButton} />
      </form>
    );
  }
}


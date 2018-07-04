import { reduxForm } from 'redux-form';

import { addContact } from '../actions';

import AddContactForm from './AddContactForm.jsx';

const validate = values => {
  const errors = {};

  if (!values.name) {
    errors.name = 'This field is required';
  } else if (values.name.length > 15) {
    errors.name = 'Must be 15 characters or less';
  }
  if (!values.lastName) {
    errors.lastName = 'This field is required';
  }
  if (!values.email) {
    errors.email = 'This field is required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.phone) {
    errors.phone = 'This field is required';
  } else if (values.phone.length < 10) {
    errors.phone = 'Must be 10 phone numbers';
  }
  return errors;
};

export default reduxForm({
  form: 'contact',
  validate,
  onSubmit: (values, dispatch) => {
    dispatch(addContact(values));
  },
  onSubmitSuccess: (result, dispatch, props) => {
    props.reset('contact');
  }
})(AddContactForm);
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import AppContext from '../model/context/context';

class Login extends React.Component {
  static contextType = AppContext;

  validate = values => {
    let errors = {};
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    if (values.password.length < 6) {
      errors.password = 'password needs to be at least 6 characters long';
    }
    return errors;
  };

  formSubmit = (values, { setSubmitting, resetForm }) => {
    try {
      this.context.login(values.email, values.password);
      this.setState({});
      resetForm();
      setSubmitting(false);
      this.props.router.push('/');
    } catch (error) {
      console.log(error);
      setSubmitting(false);
    }
  };

  render() {
    const { router } = this.props;
    //console.log(this.context);

    return (
      <div>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validate={this.validate}
          onSubmit={this.formSubmit}
        >
          {({ isSubmitting }) => (
            <Form
              style={{
                display: 'grid',
                background: 'rgba(0,0,0,.1)',
                gridTemplateColumns: '11rem 11rem',
                justifyContent: 'center',
                gridGap: '5px',
                width: '25rem',
                margin: 'auto',
                padding: '10px',
                borderRadius: '8px',
              }}
            >
              <header
                style={{
                  fontSize: '1.2rem',
                  marginLeft: '-1rem',
                  marginBottom: '.8rem',
                  padding: '0 .5rem',
                  background: 'rgba(0, 0, 0, 0.1)',
                  borderRadius: '8px',
                  width: '5rem',
                }}
              >
                Login
              </header>
              <div />
              <label>Email</label>
              <label>Password</label>
              <div>
                <Field
                  type="email"
                  name="email"
                  autoFocus={true}
                  placeholder="Email"
                />
                <ErrorMessage name="email" component="div" />
              </div>
              <div>
                <Field type="password" name="password" placeholder="Password" />
                <ErrorMessage name="password" component="div" />
              </div>
              <div />
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{ width: '5rem', marginRight: '5px' }}
                >
                  Login
                </button>
                <button
                  type="button"
                  disabled={isSubmitting}
                  style={{ width: '5rem' }}
                  onClick={() => router.back()}
                >
                  Cancel
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}

export default Login;

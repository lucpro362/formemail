import React, { useState } from 'react';
import { Formik } from 'formik';
import './App.css';

const REGEX = {
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
};

const App = () => {
  const [form, setForm] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleValidate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = 'Required';
    } else if (!REGEX.email.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    if (!values.title) {
      errors.title = 'Required';
    }

    return errors;
  };

  const handleSubmit = () => {
    alert('Contact form submitted successfully!');
  };

  return (
    <div className="App">
      <Formik
        initialValues={form}
        validate={handleValidate}
        onSubmit={handleSubmit}
      >
        {({ values, errors, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                id="email"
                name="email"
                value={values.email || ''}
                onChange={handleChange}
              />
              {errors.email && <div className="error">{errors.email}</div>}
            </div>
            <div>
              <label htmlFor="title">Title:</label>
              <input
                type="text"
                id="title"
                name="title"
                value={values.title || ''}
                onChange={handleChange}
              />
              {errors.title && <div className="error">{errors.title}</div>}
            </div>
            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default App;
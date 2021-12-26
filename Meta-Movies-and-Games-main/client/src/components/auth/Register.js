import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { setAlert } from "../../actions/alert";
import { register } from "../../actions/auth";
import PropTypes from "prop-types";
import { Form, Button } from "react-bootstrap";

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("Passwords do not match", "danger");
    } else {
      register({ name, email, password });
    }
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Fragment>
      <div container>
        <div className='about-item'>
        <h7>Sign up here</h7>

        {/* <form id="signup-form" onSubmit={(e) => onSubmit(e)}>
          <label>Name</label>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={(e) => handleChange(e)}
            autoFocus
            required
          />
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={email}
            placeholder="Email"
            onChange={(e) => handleChange(e)}
            required
          />
          <label>Password</label>
          <input
            type="password"
            name="password2"
            value={password2}
            placeholder="Password"
            onChange={(e) => handleChange(e)}
            required
          />
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Confirm Password"
            onChange={(e) => handleChange(e)}
            required
          />

          <button type="submit">Sign Up</button>
        </form> */}


        <Form onSubmit={(e) => onSubmit(e)}>
          <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name='name'
              placeholder="Enter name"
              value={name}
              onChange={(e) => handleChange(e)}
              required
            />
           
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name='email'
              placeholder="Email"
              value={email}
              onChange={(e) => handleChange(e)}
              required
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name='password'
              placeholder="Password"
              value={password}
              onChange={(e) => handleChange(e)}
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              name='password2'
              placeholder="Confirm Password"
              value={password2}
              onChange={(e) => handleChange(e)}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
      </div>
    </Fragment>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(Register);

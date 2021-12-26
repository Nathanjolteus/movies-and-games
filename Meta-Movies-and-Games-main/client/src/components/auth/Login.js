import React, { Fragment, useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/auth";
import { Form, Button } from "react-bootstrap";

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    login(email, password);
  };

  //Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <Fragment>
      <div className='about-item'>
      <div container>
        <h7>Login here</h7>
        
        {/* <form id="signin-form" onSubmit={(e) => onSubmit(e)}>
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
            name="password"
            value={password}
            placeholder="Password"
            onChange={(e) => handleChange(e)}
            required
          />
          
          <button type="submit">Login</button>
        </form> */}
        <Form onSubmit={(e) => onSubmit(e)}>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" name ='email' value={email} onChange={(e) => handleChange(e)} required/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" name='password' value={password} onChange={(e) => handleChange(e)} required/>
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

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);

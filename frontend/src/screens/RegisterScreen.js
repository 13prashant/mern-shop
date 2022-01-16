import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, Col, Form, Row } from "react-bootstrap";

import Loader from "../components/Loader";
import Message from "../components/Message";
import FormContainer from "../components/FormContainer";

import { register } from "../actions/userActions";

const RegisterScreen = ({ location, history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  const redirect = location.search ? location.search.split("=")[1] : "/";
  console.log(redirect);

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, userInfo, error } = userRegister;

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [userInfo, history, redirect]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do not match!");
    } else {
      setMessage(null);
      dispatch(register(name, email, password));
    }
  };

  return (
    <FormContainer>
      <h1>Sign Up</h1>
      {message && <Message variant="danger">{message}</Message>}
      {error && <Message variant="danger">{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="name"
            placeholder="Enter name"
          />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Enter password"
          />
        </Form.Group>
        <Form.Group controlId="confirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
            type="password"
            placeholder="Confirm password"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Register
        </Button>
        <Row className="py-3">
          <Col>
            Already have an account?{" "}
            <Link to={redirect ? `/login?redirect=${redirect}` : "/login"}>
              Login
            </Link>
          </Col>
        </Row>
      </Form>
    </FormContainer>
  );
};

export default RegisterScreen;

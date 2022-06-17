import React, { useState } from "react";
import PropTypes from "prop-types";
import { Form, Button, Card, Row, Col, Container } from "react-bootstrap";
import { RegistrationView } from "../registration-view/registration-view";

export function LoginView(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
    /* Send a request to the server for authentication */
    /* then call props.onLoggedIn(username) */
    props.onLoggedIn(username);
  };

  const handleClick = () => {
    return <RegistrationView />;
  };

  return (
    <Container>
      <Row>
        <Card>
          <Card.Body>
            <Card.Title>Login</Card.Title>
            <Form>
              <Form.Group controlId="formUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Username"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
            </Form>

            <Button variant="info" type="submit" onClick={handleSubmit}>
              Submit
            </Button>
            <Button
              variant="outline-secondary"
              type="button"
              onClick={handleClick}
            >
              Register here
            </Button>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
}

LoginView.propTypes = {
  username: PropTypes.string,
  password: PropTypes.string,
};

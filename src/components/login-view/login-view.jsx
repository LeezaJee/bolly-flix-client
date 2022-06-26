import React, { useState } from "react";
import PropTypes from "prop-types";
import { Form, Button, Card, Row, Col, Container } from "react-bootstrap";
import { RegistrationView } from "../registration-view/registration-view";
import axios from "axios";

export function LoginView(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //indicates whether to show RegistraionView or not - by default false
  const [showRegister, setShowRegister] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    /* Send a request to the server for authentication */
    axios
      .post("https://bolly-flix.herokuapp.com/login", {
        Username: username,
        Password: password,
      })
      .then((response) => {
        const data = response.data;
        props.onLoggedIn(data);
      })
      .catch((e) => {
        console.log("There is no such user");
      });
  };

  const handleClick = (e) => {
    e.preventDefault();
    setShowRegister(!showRegister);
    return <RegistrationView />;
  };

  return (
    <Container>
      <Row>
        <Card border="info">
          <Card.Body>
            <Card.Title>Login</Card.Title>
            {showRegister === false ? (
              <Form>
                <Form.Group controlId="formUsername">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your Username"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter your Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>

                <div className="mt-2">
                  <Button variant="info" type="submit" onClick={handleSubmit}>
                    Submit
                  </Button>
                  <Button variant="link" onClick={handleClick}>
                    Register
                  </Button>
                </div>
              </Form>
            ) : (
              <RegistrationView toggleLogin={handleClick} />
            )}
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

import React, { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { Form, Button, Card, Row, Col, Container } from "react-bootstrap";
import { RegistrationView } from "../registration-view/registration-view";
import "./login-view.scss";

export function LoginView(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // Declare hook for each input
  const [usernameErr, setUsernameErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  //indicates whether to show RegistraionView or not - by default false
  const [showRegister, setShowRegister] = useState(false);

  // validate user inputs
  const validate = () => {
    let isReq = true;
    if (!username) {
      setUsernameErr("Username Required");
      isReq = false;
    } else if (username.length < 5) {
      setUsernameErr("Username must be 5 characters long");
      isReq = false;
    }
    if (!password) {
      setPasswordErr("Password Required");
      isReq = false;
    } else if (password.length < 6) {
      setPassword("Password must be 6 characters long");
      isReq = false;
    }
    return isReq;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isReq = validate();
    if (isReq) {
      /* Send request to the server for authentication */
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
          console.log("no such user");
        });
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    setShowRegister(!showRegister);
    return <RegistrationView />;
  };

  return (
    <Container className="loginContainer" fluid>
      <Row className="justify-content-center login-view">
        <Card id="login-card">
          <Card.Body>
            <Card.Title id="login-label">Login to BollyFlix</Card.Title>
            {showRegister === false ? (
              <Form>
                <Form.Group controlId="formUsername">
                  <Form.Label id="username-label">Username</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your Username"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="formPassword">
                  <Form.Label id="password-label">Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter your Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>

                <div className="mt-2">
                  <Button
                    id="submit-btn"
                    variant="info"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Submit
                  </Button>
                  <Button
                    id="register-btn"
                    variant="link"
                    onClick={handleClick}
                  >
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

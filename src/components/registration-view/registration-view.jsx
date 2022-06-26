import React, { useState } from "react";
import PropTypes from "prop-types";
import { Form, Button } from "react-bootstrap";

import "./registration-view.scss";
import axios from "axios";

export function RegistrationView(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const { toggleLogin } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://bolly-flix.herokuapp.com/users", {
        Username: username,
        Password: password,
        Email: email,
      })
      .then((response) => {
        const data = response.data;
        console.log(data);
        window.open("/", "_self");
        // the second argument '_self' is necessary so that the page will open in the current tab
      })
      .catch((e) => {
        console.log("error registering the user");
        alert("Something was not entered right");
      });
  };

  return (
    <Form>
      <Form.Group>
        <Form.Label id="username-label">Username:</Form.Label>
        <Form.Control
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          placeholder="Pick a Username"
        />
      </Form.Group>

      <Form.Group>
        <Form.Label id="password-label">Password:</Form.Label>
        <Form.Control
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="Pick a Password"
          minLength="8"
        />
      </Form.Group>

      <Form.Group>
        <Form.Label id="email-label">E-Mail:</Form.Label>
        <Form.Control
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Enter your E-Mail"
        />
      </Form.Group>

      <div className="mt-2">
        <Button
          id="submit-btn"
          variant="info"
          type="submit"
          onClick={handleSubmit}
        >
          Register
        </Button>
        <Button id="login-btn" variant="link" onClick={(e) => toggleLogin(e)}>
          Login instead
        </Button>
      </div>
    </Form>
  );
}

RegistrationView.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  email: PropTypes.string,
  birthday: PropTypes.number,
};

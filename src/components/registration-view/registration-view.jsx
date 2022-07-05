import React, { useState } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import { Row, Col, Form, Button, Container } from 'react-bootstrap'
import './registration-view.scss'

export function RegistrationView(props) {
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const [nameErr, setNameErr] = useState('')
    const [usernameErr, setUsernameErr] = useState('')
    const [passwordErr, setPasswordErr] = useState('')
    const [emailErr, setEmailErr] = useState('')

    const { toggleLogin } = props

    // validate user inputs
    const validate = () => {
        let isReq = true
        if (!name) {
            setNameErr('Name Required')
            isReq = false
        } else if (name.length < 5) {
            setNameErr('Name is too short')
            isReq = false
        }
        if (!username) {
            setUsernameErr('Username Required')
            isReq = false
        } else if (username.length < 5) {
            setUsernameErr('Username must be at least 5 characters long')
            isReq = false
        }
        if (!password) {
            setPasswordErr('Password Required')
            isReq = false
        } else if (password.length < 6) {
            setPasswordErr('Password must be at least 6 characters long')
            isReq = false
        }
        if (!email) {
            setEmailErr('Email Required')
            isReq = false
        } else if (email.indexOf('@') === -1) {
            setEmailErr('Invalid Email')
            isReq = false
        }

        return isReq
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const isReq = validate()
        if (isReq) {
            axios
                .post('https://bolly-flix.herokuapp.com/users', {
                    Username: username,
                    Password: password,
                    Email: email,
                })
                .then((response) => {
                    const data = response.data
                    console.log(data)
                    alert('Registration successful, please login')
                    window.open('/', '_self')
                    // the second argument '_self' is necessary so that the page will open in the current tab
                })
                .catch((response) => {
                    console.error(response)
                    alert('unable to register')
                })
        }
    }

    return (
        <Container className="registrationContainer">
            <Row className="mt-5">
                <Form>
                    <Form.Group
                        controlId="formUsername"
                        className="reg-form-inputs"
                    >
                        <Form.Label id="username-label">Username:</Form.Label>
                        <Form.Control
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            placeholder="Choose a Username"
                        />
                        {usernameErr && <p>{usernameErr}</p>}
                    </Form.Group>

                    <Form.Group
                        controlId="formPassword"
                        className="reg-form-inputs"
                    >
                        <Form.Label id="password-label">Password:</Form.Label>
                        <Form.Control
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder="Choose a Password"
                        />
                        {passwordErr && <p>{passwordErr}</p>}
                    </Form.Group>

                    <Form.Group controlId="Email" className="reg-form-inputs">
                        <Form.Label id="email-label">E-Mail:</Form.Label>
                        <Form.Control
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder="Enter your E-Mail"
                        />
                        {emailErr && <p>{emailErr}</p>}
                    </Form.Group>

                    <Button
                        id="submit-btn"
                        variant="info"
                        type="submit"
                        onClick={handleSubmit}
                    >
                        Register
                    </Button>

                    <Button
                        id="login-btn"
                        variant="link"
                        onClick={(e) => toggleLogin(e)}
                    >
                        Login instead
                    </Button>
                </Form>
            </Row>
        </Container>
    )
}

RegistrationView.propTypes = {
    register: PropTypes.shape({
        Name: PropTypes.string.isRequired,
        Username: PropTypes.string.isRequired,
        Password: PropTypes.string.isRequired,
        Email: PropTypes.string.isRequired,
    }),
}

import React from 'react'
import { Form, Button, Col, Row, Card } from 'react-bootstrap'

export function UpdateUser(props) {
    const user = props.userdata
    const { handleSubmit, handleUpdate } = props

    return (
        <>
            <Col>
                <Row>
                    <Card className="bg-light" style={{ textAlign: 'left' }}>
                        <Form
                            className="profile-form text-dark"
                            onSubmit={(e) => handleSubmit(e)}
                        >
                            <Form.Group
                                controlId="formUsername"
                                className="mb-3"
                            >
                                <Form.Label>Username:</Form.Label>
                                <Form.Control
                                    type="text"
                                    defaultValue={user.Username}
                                    onChange={(e) => handleUpdate(e)}
                                    required
                                    placeholder="Enter a Username"
                                />
                            </Form.Group>

                            <Form.Group
                                controlId="formPassword"
                                className="mb-3"
                            >
                                <Form.Label>Password:</Form.Label>
                                <Form.Control
                                    type="password"
                                    defaultValue=""
                                    onChange={(e) => handleUpdate(e)}
                                    required
                                    placeholder="Your new password must be 8 or more characters"
                                />
                            </Form.Group>

                            <Form.Group controlId="formEmail" className="mb-3">
                                <Form.Label>Email:</Form.Label>
                                <Form.Control
                                    type="email"
                                    defaultValue={user.Email}
                                    onChange={(e) => handleUpdate(e)}
                                    required
                                    placeholder="Enter your email address"
                                />
                            </Form.Group>

                            <Button
                                variant="info"
                                type="submit"
                                onClick={handleSubmit}
                            >
                                Submit
                            </Button>
                            <h5>After updating, please log out and back in</h5>
                        </Form>
                    </Card>
                </Row>
            </Col>
        </>
    )
}

import React from 'react'
import { Form, Button, Col, Row, Card } from 'react-bootstrap'

export function UpdatedUser(props) {
    const user = props.userdata
    const { handleSubmit, handleUpdate, deleteProfile } = props

    return (
        <>
            <Col>
                <Row>
                    <Form
                        className="profile-form"
                        onSubmit={(e) => handleSubmit(e)}
                    >
                        <Form.Group controlId="formUsername" className="mb-3">
                            <Form.Label>Username:</Form.Label>
                            <Form.Control
                                type="text"
                                name="Username"
                                defaultValue={user.Username}
                                onChange={(e) => handleUpdate(e)}
                                required
                                placeholder="Enter new Username"
                            />
                        </Form.Group>

                        <Form.Group controlId="formPassword" className="mb-3">
                            <Form.Label>Password:</Form.Label>
                            <Form.Control
                                type="password"
                                name="Password"
                                defaultValue=""
                                onChange={(e) => handleUpdate(e)}
                                required
                                placeholder="Enter new Password"
                            />
                        </Form.Group>

                        <Form.Group controlId="formEmail" className="mb-2">
                            <Form.Label>Email:</Form.Label>
                            <Form.Control
                                type="text"
                                name="Email"
                                defaultValue={user.Email}
                                onChange={(e) => handleUpdate(e)}
                                required
                                placeholder="Enter your Email address"
                            />
                        </Form.Group>

                        <Button
                            id="submit"
                            variant="info"
                            type="submit"
                            onClick={handleSubmit}
                        >
                            Submit
                        </Button>
                        <Button
                            variant="danger"
                            id="delete-btn"
                            type="submit"
                            onClick={deleteProfile}
                        >
                            Delete profile
                        </Button>
                    </Form>
                </Row>
            </Col>
        </>
    )
}

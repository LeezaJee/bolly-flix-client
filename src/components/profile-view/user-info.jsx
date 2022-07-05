import React from 'react'
import { Col, Row, Card } from 'react-bootstrap'

export function UserInfo({ email, name }) {
    return (
        <>
            <Col>
                <Row>
                    <Card className="bg-light" border="black">
                        <Card.Title className="text-dark">Your Info</Card.Title>
                        <Card.Body
                            className="text-dark"
                            style={{ textAlign: 'left' }}
                        >
                            <label
                                htmlFor="username"
                                className="userdata-label"
                            >
                                Username:
                            </label>
                            <Card.Text>{userdata.username}</Card.Text>
                            <label htmlFor="email" className="userdata-label">
                                Email:
                            </label>
                            <Card.Text>{userdata.email}</Card.Text>
                        </Card.Body>
                    </Card>
                </Row>
            </Col>
        </>
    )
}

export default UserInfo

import React from 'react'
import { Col, Row, Card, Button } from 'react-bootstrap'

export function UserData(props) {
    const userdata = props.userdata

    return (
        <>
            <Col>
                <Card>
                    <Card.Title id="details">Your Details</Card.Title>
                    <Card.Body className="text-dark">
                        <label htmlFor="username" className="userdata-label">
                            Username: {userdata.Username}
                        </label>
                        <Card.Text>{userdata.Username}</Card.Text>
                        <label htmlFor="email" className="userdata-label">
                            Email: {userdata.Email}
                        </label>
                        <Card.Text>{userdata.Email}</Card.Text>
                        {/* Link Back to Movies */}

                        <Button id="back-btn" variant="info" href="/">
                            Back to Movies
                        </Button>
                    </Card.Body>
                </Card>
            </Col>
        </>
    )
}

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
                        <Card.Text>Username: {userdata.Username}</Card.Text>

                        <Card.Text>E-mail: {userdata.Email}</Card.Text>
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

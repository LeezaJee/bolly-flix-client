import React from 'react'
import { Container, Row, Col, Button, Card } from 'react-bootstrap'

import './director-view.scss'

export class DirectorView extends React.Component {
    render() {
        const { movie, onBackClick } = this.props
        return (
            <>
                <h1 id="director-label">{movie.Director.Name}</h1>
                <Card>
                    <Card.Body>
                        <h5 className="label">Director Bio</h5>
                        <p className="value">{movie.Director.Bio}</p>
                    </Card.Body>
                    <Card.Body>
                        <h5 className="label">Born In</h5>
                        <p className="value">{movie.Director.Birth}</p>
                    </Card.Body>
                    <Button
                        className="mt-1"
                        variant="info"
                        type="button"
                        onClick={() => {
                            onBackClick()
                        }}
                    >
                        Back
                    </Button>
                </Card>
            </>
        )
    }
}

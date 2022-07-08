import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'

export class DirectorView extends React.Component {
    render() {
        const { movie, onBackClick } = this.props
        return (
            <>
                <Container>
                    <Row className="movie-director">
                        <Button
                            id="return-button"
                            onClick={() => {
                                onBackClick()
                            }}
                        >
                            Back
                        </Button>
                        <Col>
                            <h4 className="label">Director: </h4>
                            <h5 className="label">Bio: </h5>
                            <h5 className="label">Birth: </h5>
                        </Col>
                        <Col>
                            <span className="value">{movie.Director.Name}</span>

                            <span className="value">{movie.Director.Bio}</span>

                            <span className="value">
                                {movie.Director.Birth}
                            </span>
                        </Col>
                        <Button
                            variant="info"
                            onClick={() => {
                                onBackClick(null)
                            }}
                        >
                            Back
                        </Button>
                    </Row>
                </Container>
            </>
        )
    }
}

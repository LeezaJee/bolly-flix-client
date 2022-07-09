import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Row, Figure, Button, Card } from 'react-bootstrap'
import './profile-view.scss'

export function FavoriteMovies({ favoriteMoviesList, removeFav }) {
    return (
        <Card>
            <Card.Body>
                <Row>
                    <Col xs={12}>
                        <h4 id="favorites">Your Favorite Movies</h4>
                    </Col>
                </Row>

                <Row>
                    {favoriteMoviesList.map((movie) => {
                        return (
                            <Col
                                xs={12}
                                md={6}
                                lg={3}
                                key={movie}
                                className="fav-movie"
                            >
                                <Figure>
                                    <Link to={`/movies/${movie.Title}`}>
                                        <Figure.Image
                                            src={movie.ImagePath}
                                            crossOrigin="true"
                                        />
                                        <Figure.Caption>
                                            {movie.Title}
                                        </Figure.Caption>
                                    </Link>
                                </Figure>

                                <Button
                                    variant="outline-danger"
                                    onClick={() => removeFav(movie.Title)}
                                >
                                    Remove from Favorites
                                </Button>
                            </Col>
                        )
                    })}
                </Row>
            </Card.Body>
        </Card>
    )
}

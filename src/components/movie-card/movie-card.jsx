import React from "react";
import PropTypes from "prop-types";
import { Button, Card, Col, Row } from "react-bootstrap";
import "./movie-card.scss";

export class MovieCard extends React.Component {
  render() {
    const { movie, onMovieClick } = this.props; //movieData = prop name extracted from main-view.jsx

    return (
      <Row id="movieCard">
        <Col>
          <Card id="movie-card">
            <Card.Img variant="top" id="card-image" src={movie.ImagePath} />
            <Card.Body>
              <Card.Title id="movie-title">{movie.Title}</Card.Title>
              <Card.Text>{movie.Description}</Card.Text>
              <Button
                variant="info"
                onClick={() => {
                  onMovieClick(movie);
                }}
              >
                Open
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string,
    Genre: PropTypes.shape({
      Name: PropTypes.string,
      Description: PropTypes.string,
    }),
    Actors: PropTypes.arrayOf(PropTypes.string),
    ImagePath: PropTypes.string,
    Featured: PropTypes.bool,
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired,
};

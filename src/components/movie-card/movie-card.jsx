import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./movie-card.scss";
import { Container } from "react-bootstrap";

export class MovieCard extends React.Component {
  render() {
    const { movie, onMovieClick } = this.props; //movieData = prop name extracted from main-view.jsx

    return (
      <Row>
        <Col>
          <Card id="movie-card" border="info">
            <Card.Img variant="top" id="card-image" src={movie.ImagePath} />
            <Card.Body>
              <Card.Title id="movie-title">{movie.Title}</Card.Title>
              <Card.Text>{movie.Description}</Card.Text>
              <Button onClick={() => onMovieClick(movie)} variant="info">
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

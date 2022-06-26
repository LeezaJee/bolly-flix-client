import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../movie-view/movie-view.scss";
import { MovieCard } from "../movie-card/movie-card";

export class MovieView extends React.Component {
  render() {
    const { movie, onBackClick } = this.props;

    return (
      <Card className="movie-view">
        <Card.Img id="movie-poster" variant="top" src={movie.ImagePath} />
        <Card.Body>
          <Card.Title className="text-center" id="movie-title">
            {movie.Title}
          </Card.Title>

          <Card.Text className="text-center" id="movie-description">
            {movie.Description}
          </Card.Text>

          <Button
            onClick={() => {
              onBackClick(null);
            }}
            variant="info"
          >
            Back
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

MovieView.propTypes = {
  movie: PropTypes.shape({
    ImagePath: PropTypes.string.isRequired,
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    Genre: PropTypes.shape({
      Name: PropTypes.string,
      Description: PropTypes.string,
    }),
    Director: PropTypes.shape({
      Name: PropTypes.string,
      Bio: PropTypes.string,
      Birthday: PropTypes.instanceOf(Date),
      DeathYear: PropTypes.instanceOf(Date),
    }),
    Actors: PropTypes.arrayOf(PropTypes.string),
    Featured: PropTypes.bool,
  }).isRequired,
  onBackClick: PropTypes.func.isRequired,
};

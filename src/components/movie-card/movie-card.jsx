import React from "react";

export class MovieCard extends React.Component {
  render() {
    const { movie, onMovieClick } = this.props; //movieData = prop name extracted from main-view.jsx
    return (
      <div
        className="movie-card"
        onClick={() => {
          onMovieClick(movie);
        }}
      >
        {movie.Title}
      </div>
    );
  }
}

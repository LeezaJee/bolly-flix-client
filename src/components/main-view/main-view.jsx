import React from "react";
import axios from "axios"; // promise-based HTTP client for ajax fetching
import PropTypes from "prop-types";
import { LoginView } from "../login-view/login-view";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { RegistrationView } from "../registration-view/registration-view";
import { Row, Col, Button } from "react-bootstrap";

import "./main-view.scss";

export class MainView extends React.Component {
  constructor() {
    super();

    // Initial state is set to null
    this.state = {
      movies: [],
      selectedMovie: null,
      user: null,
    };
  }

  setSelectedMovie(newSelectedMovie) {
    this.setState({
      selectedMovie: newSelectedMovie,
    });
  }

  onLoggedIn(authData) {
    //authData = user + token
    console.log(authData);
    this.setState({
      user: authData.user.Username, //username is saved in the user state
    });

    //auth information received from handleSubmit method (token and user) is saved in localStorage
    localStorage.setItem("token", authData.token);
    localStorage.setItem("user", authData.user.Username);
    this.getMovies(authData.token); //this.getMovies(authData) is called to get the movies from API once the user is logged in
    //this refers to the object itself, in this case, the MainView class
  }

  //fetch data from database
  getMovies(token) {
    axios
      .get("https://bolly-flix.herokuapp.com/movies", {
        headers: { Authorization: `Bearer ${token}` },
        //By passing bearer authorization in the header of your HTTP requests, you can make authenticated requests to your API.
      })
      .then((response) => {
        // Assign the result to the state
        this.setState({
          movies: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onLoggedOut() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    this.setState({
      user: null,
    });
  }

  render() {
    const { movies, selectedMovie, user } = this.state;
    /* if there is no user, the LoginView is rendered. If there is a user logged in, the user details are *passed as a prop to the LoginView */

    if (!user)
      return (
        <Col>
          <LoginView onLoggedIn={(user) => this.onLoggedIn(user)} />
        </Col>
      );
    // Before the movies have been loaded
    if (movies.length === 0) {
      return <div className="main-view" />;
    }
    return (
      //Container already applied in index.jsx. One row only because condition allows only one possibility to render

      <Row className="main-view justify-content-md-center">
        <Button
          id="logoutBtn"
          variant="info"
          onClick={() => {
            this.onLoggedOut();
          }}
        >
          Logout
        </Button>
        {selectedMovie ? (
          <Col md={8}>
            <MovieView
              movie={selectedMovie}
              onBackClick={(newSelectedMovie) => {
                this.setSelectedMovie(newSelectedMovie);
              }}
            />
          </Col>
        ) : (
          movies.map((movie) => (
            <Col md={3}>
              <MovieCard
                key={movie._id}
                movie={movie}
                onMovieClick={(newSelectedMovie) => {
                  this.setSelectedMovie(newSelectedMovie);
                }}
              />
            </Col>
          ))
        )}
      </Row>
    );
  }

  componentDidMount() {
    let accessToken = localStorage.getItem("token"); //get the value of the token from localStorage
    //if access token is present, it means the user is already logged in and getMovies method can be called
    if (accessToken !== null) {
      this.setState({
        user: localStorage.getItem("user"),
      });
      this.getMovies(accessToken);
    }
  }
}

MainView.propTypes = {
  selectedMovie: PropTypes.func,
  user: PropTypes.shape({
    username: PropTypes.string,
    password: PropTypes.string,
  }),
};

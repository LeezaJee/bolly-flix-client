import React from "react";
import axios from "axios"; // promise-based HTTP client for ajax fetching
import PropTypes from "prop-types";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { LoginView } from "../login-view/login-view";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { RegistrationView } from "../registration-view/registration-view";
import { NavBar } from "../navbar-view/navbar";
import { Row, Col, Button } from "react-bootstrap";
import "./main-view.scss";

export class MainView extends React.Component {
  constructor() {
    super();

    // Initial state is set to null
    this.state = {
      movies: [],
      user: null,
    };
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

  onLoggedOut() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    this.setState({
      user: null,
    });
  }

  render() {
    const { movies, user } = this.state;

    if (!user)
      return (
        <Row>
          <Col>
            <LoginView onLoggedIn={(user) => this.onLoggedIn(user)} />
          </Col>
        </Row>
      );
    if (movies.length === 0) return <div className="main-view" />;

    return (
      <Router>
        <Row className="main-view justify-content-md-center">
          <Route
            exact
            path="/"
            render={() => {
              return movies.map((m) => (
                <Col md={3} key={m._id}>
                  <MovieCard movie={m} />
                </Col>
              ));
            }}
          />
          <Route
            path="/movies/:movieId"
            render={({ match }) => {
              return (
                <Col md={8}>
                  <MovieView
                    movie={movies.find((m) => m._id === match.params.movieId)}
                  />
                </Col>
              );
            }}
          />
        </Row>
      </Router>
    );
  }
}

MainView.propTypes = {
  selectedMovie: PropTypes.func,
  user: PropTypes.shape({
    username: PropTypes.string,
    password: PropTypes.string,
  }),
};

export default MainView;

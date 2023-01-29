import React from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import axios from 'axios' // promise-based HTTP client for ajax fetching
import { Container, Row, Col, Button } from 'react-bootstrap'
import PropTypes from 'prop-types'
import { NavbarView } from '../navbar-view/navbar-view'
import { LoginView } from '../login-view/login-view'
import { MovieCard } from '../movie-card/movie-card'
import { MovieView } from '../movie-view/movie-view'
import { RegistrationView } from '../registration-view/registration-view'
import { DirectorView } from '../director-view/director-view'
import { GenreView } from '../genre-view/genre-view'
import { ProfileView } from '../profile-view/profile-view'
import { Link } from 'react-router-dom'
import './main-view.scss'

export const baseURL = 'https://bollyflix-api.vercel.app'

class MainView extends React.Component {
    constructor() {
        super()

        // Initial state is set to null
        this.state = {
            movies: [],
            user: null,
        }
    }

    componentDidMount() {
        let accessToken = localStorage.getItem('token') //get the value of the token from localStorage
        //if access token is present, it means the user is already logged in and getMovies method can be called
        if (accessToken !== null) {
            this.setState({
                user: localStorage.getItem('user'),
            })
            this.getMovies(accessToken)
        }
    }

    onLoggedIn(authData) {
        //authData = user + token
        console.log(authData)
        this.setState({
            user: authData.user.Username, //username is saved in the user state
        })

        //auth information received from handleSubmit method (token and user) is saved in localStorage
        localStorage.setItem('token', authData.token)
        localStorage.setItem('user', authData.user.Username)
        this.getMovies(authData.token) //this.getMovies(authData) is called to get the movies from API once the user is logged in
        //this refers to the object itself, in this case, the MainView class
    }

    //fetch data from database
    getMovies(token) {
        axios
            .get(`${baseURL}/movies`, {
                headers: { Authorization: `Bearer ${token}` },
                //By passing bearer authorization in the header of your HTTP requests, you can make authenticated requests to your API.
            })
            .then((response) => {
                // Assign the result to the state
                this.setState({
                    movies: response.data,
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    onLoggedOut() {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        this.setState({
            user: null,
        })
    }

    render() {
        const { movies, user } = this.state

        return (
            <Router>
                <Row>
                    <NavbarView user={user} />
                </Row>

                <Container>
                    <Row className="main-view justify-content-md-center">
                        {/*HomeRoute*/}
                        <Route
                            exact
                            path="/"
                            render={() => {
                                if (!user)
                                    return (
                                        <Col md={7}>
                                            <LoginView
                                                onLoggedIn={(user) =>
                                                    this.onLoggedIn(user)
                                                }
                                            />
                                        </Col>
                                    )
                                // Before the movies have been loaded
                                if (movies.length === 0)
                                    return <div className="main-view"></div>

                                return movies.map((m) => (
                                    <Col md={3} key={m._id}>
                                        <MovieCard movie={m} />
                                    </Col>
                                ))
                            }}
                        />

                        {/*RegisterRoute*/}
                        <Route
                            path="/register"
                            render={() => {
                                if (user) return <Redirect to="/" />
                                return (
                                    <Col>
                                        <RegistrationView />
                                    </Col>
                                )
                            }}
                        />

                        {/*MovieRoute*/}
                        <Route
                            path="/movies/:movieId"
                            render={({ match, history }) => {
                                if (!user)
                                    return (
                                        <Col>
                                            <LoginView
                                                onLoggedIn={(user) =>
                                                    this.onLoggedIn(user)
                                                }
                                            />
                                        </Col>
                                    )

                                if (movies.length === 0)
                                    return <div className="main-view"></div>

                                return (
                                    <Col md={8}>
                                        <MovieView
                                            movie={movies.find(
                                                (m) =>
                                                    m._id ===
                                                    match.params.movieId
                                            )}
                                            onBackClick={() => history.goBack()}
                                        />
                                    </Col>
                                )
                            }}
                        />

                        {/*DirectorRoute*/}
                        <Route
                            path="/director/:Name"
                            render={({ match, history }) => {
                                if (!user)
                                    return (
                                        <Col>
                                            <LoginView
                                                onLoggedIn={(user) =>
                                                    this.onLoggedIn(user)
                                                }
                                            />
                                        </Col>
                                    )

                                if (movies.length === 0)
                                    return <div className="main-view"></div>

                                return (
                                    <Col md={8}>
                                        <DirectorView
                                            movie={movies.find(
                                                (movie) =>
                                                    movie.Director.Name ===
                                                    match.params.Name
                                            )}
                                            onBackClick={() => history.goBack()}
                                        />
                                    </Col>
                                )
                            }}
                        />

                        {/*GenreRoute*/}
                        <Route
                            path="/genres/:name"
                            render={({ match, history }) => {
                                if (!user)
                                    return (
                                        <Col>
                                            <LoginView
                                                onLoggedIn={(user) =>
                                                    this.onLoggedIn(user)
                                                }
                                            />
                                        </Col>
                                    )

                                if (movies.length === 0)
                                    return <div className="main-view"></div>

                                return (
                                    <Col md={8}>
                                        <GenreView
                                            genre={
                                                movies.find(
                                                    (m) =>
                                                        m.Genre.Name ===
                                                        match.params.name
                                                ).Genre
                                            }
                                            onBackClick={() => history.goBack()}
                                            movies={movies}
                                        />
                                    </Col>
                                )
                            }}
                        />

                        {/*ProfileRoute*/}
                        <Route
                            path="/users/:username"
                            render={({ history, match }) => {
                                if (!user) return <Redirect to="/" />

                                return (
                                    <Col>
                                        <ProfileView
                                            history={history}
                                            match={match}
                                            movies={movies}
                                            user={user}
                                            onBackClick={() => history.goBack()}
                                        />
                                    </Col>
                                )
                            }}
                        />
                    </Row>
                </Container>
            </Router>
        )
    }
}

export default MainView

MainView.propTypes = {
    selectedMovie: PropTypes.func,
    user: PropTypes.shape({
        username: PropTypes.string,
        password: PropTypes.string,
    }),
}

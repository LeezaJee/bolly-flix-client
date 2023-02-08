import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Container, Button, Col, Row, Card } from 'react-bootstrap'
import './profile-view.scss'
import { UserData } from './user-data'
import { FavoriteMovies } from './favorite-movies'
import { UpdatedUser } from './update-user'

export function ProfileView(props) {
    const [userdata, setUserdata] = useState({})
    const [updatedUser, setUpdatedUser] = useState({})
    const [favoriteMoviesList, setFavoriteMoviesList] = useState([])

    let token = localStorage.getItem('token')
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`

    const getUserData = (cancelToken, username) => {
        axios
            .get(`https://bollyflix-api.onrender.com/users/${username}`, {
                cancelToken: cancelToken,
            })
            .then((response) => {
                setUserdata(response.data)
                setUpdatedUser(response.data)
                setFavoriteMoviesList(
                    props.movies.filter((m) =>
                        response.data.FavoriteMovies.includes(m._id)
                    )
                )
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        let source = axios.CancelToken.source()

        if (token !== null) {
            getUserData(source.token, props.user)
        } else {
            console.log('Not Authorized')
        }

        return () => {
            source.cancel()
        }
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        axios
            .put(
                `https://bollyflix-api.onrender.com/users/${userdata.Username}`,
                updatedUser
            )
            .then((response) => {
                setUserdata(response.data)
                alert('Profile updated')
            })
            .catch((e) => {
                console.log(e)
            })
    }

    const handleUpdate = (e) => {
        setUpdatedUser({
            ...updatedUser,
            [e.target.name]: e.target.value,
        })
    }

    const deleteProfile = (e) => {
        axios
            .delete(
                `https://bollyflix-api.onrender.com/users/${userdata.Username}`
            )
            .then((response) => {
                alert('Your profile has beeen deleted')
                localStorage.removeItem('user')
                localStorage.removeItem('token')

                window.open('/', '_self')
            })
            .catch((e) => {
                console.log(e)
            })
    }

    const removeFav = (id) => {
        axios
            .delete(
                `https://bollyflix-api.onrender.com/users/${userdata.Username}/movies/${id}`
            )
            .then(() => {
                // Change state of favoriteMovieList to render component
                setFavoriteMoviesList(
                    favoriteMoviesList.filter((movie) => movie._id != id)
                )
            })
            .catch((e) => {
                console.log(e)
            })
    }

    return (
        <Container fluid>
            <Row>
                <Col xs={12} sm={6}>
                    {/* Display userdata */}
                    <UserData userdata={userdata} />
                </Col>

                <Col xs={12} sm={6}>
                    <Card>
                        <Card.Body>
                            <UpdatedUser
                                userdata={userdata}
                                handleSubmit={handleSubmit}
                                handleUpdate={handleUpdate}
                                deleteProfile={deleteProfile}
                            />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <FavoriteMovies
                favoriteMoviesList={favoriteMoviesList}
                removeFav={removeFav}
            />
        </Container>
    )
}

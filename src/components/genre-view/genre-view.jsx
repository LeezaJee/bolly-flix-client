import { React } from 'react'
import PropTypes from 'prop-types'
import { MovieCard } from '../movie-card/movie-card'
import { Col, Row, Card, Button } from 'react-bootstrap'
import './genre-view.scss'

export function GenreView(props) {
    const { onBackClick, genre, movies } = props

    return (
        <>
            <h1 className="genre-name">{genre.Name}</h1>
            <Card>
                <Card.Body>
                    <h5 className="label">Description</h5>
                    <p className="value">{genre.Description}</p>
                </Card.Body>
                <Button
                    className="mt-1"
                    variant="info"
                    type="button"
                    onClick={() => {
                        onBackClick()
                    }}
                >
                    Back
                </Button>
            </Card>
        </>
    )
}

GenreView.propTypes = {
    genre: PropTypes.shape({
        Name: PropTypes.string.isRequired,
        Description: PropTypes.string.isRequired,
    }).isRequired,
    movies: PropTypes.array.isRequired,
    onBackClick: PropTypes.func.isRequired,
}

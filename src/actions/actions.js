// defining action types
export const SET_MOVIES = 'SET_MOVIES'
export const SET_FILTER = 'SET_FILTER'
export const SET_FAVORITES = 'SET_FAVORITES'
export const TOGGLE_FAVORITES = 'TOGGLE_FAVORITES'
export const SET_USER = 'SET_USER'
export const UPDATE_USER = 'UPDATE_USER'

// defining ACTION CREATORS in order to create different actions
// name should be as close to the action type as possible
export function setMovies(value) {
    return { type: SET_MOVIES, value }
}

export function setFilter(value) {
    return { type: SET_FILTER, value }
}

export function setFavorites(value) {
    return { type: SET_FAVORITES, value }
}

export function toggleFavorites(movie) {
    return { type: TOGGLE_FAVORITES, movie }
}

export function setUser(user) {
    return { type: SET_USER, user }
}

export function updateUser(userData) {
    return { type: UPDATE_USER, userData }
}

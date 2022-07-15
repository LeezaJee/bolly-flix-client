import { combineReducers } from 'redux'

import {
    SET_FILTER,
    SET_MOVIES,
    SET_FAVORITES,
    TOGGLE_FAVORITES,
    SET_USER,
    UPDATE_USER,
} from '../actions/actions'

// REDUCER FUNCTION filtering movies
// every time action is dispatched, this reducer will be called, and is responsible for addressing the action or not
// switch-case syntax states that if the given action is unrelated to the reducer,
// it should return whatever state it’s been given
function visibilityFilter(state = '', action) {
    switch (action.type) {
        case SET_FILTER: // if the action wasn’t SET_FILTER the reducer would return whatever it was passed as the visibilityFilter state (empty string '')
            return action.value
        default:
            return state
    }
}

// each reducer takes a state and an action, and if it’s concerned by the action, it changes the state
// Reducer function for SET_MOVIES
// movies are objects so state has to be array of objects => initializing empty array
function movies(state = [], action) {
    switch (action.type) {
        case SET_MOVIES:
            return action.value
        default:
            return state
    }
}

// Reducer function for SET_FAVORITE and TOGGLE_FAVORITES
function favorites(state = [], action) {
    switch (action.type) {
        case SET_FAVORITES:
            return action.value
        case TOGGLE_FAVORITES:
            if (state.includes(action.movie)) {
                return state.filter((val) => val !== action.movie)
            } else {
                return [...state, action.movie]
            }
        default:
            return state
    }
}

// Reducer function for SET_USER
function user(state = '', action) {
    switch (action.type) {
        case SET_USER:
            return action.user
        default:
            return state
    }
}

// Reducer function for UPDATE_USER
function updateUser(state = {}, action) {
    switch (action.type) {
        case UPDATE_USER:
            return action.updateUser
        default:
            return state
    }
}

// combined reducer to export (a reducer made out of other reducers)
const moviesApp = combineReducers({
    visibilityFilter,
    movies,
    favorites,
    user,
    updateUser,
})

export default moviesApp

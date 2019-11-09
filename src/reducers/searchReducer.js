import { SEARCH_MOVIE, FETCH_MOVIES, FETCH_MOVIE, LOADING } from '../actions/types'
import initialState from './initialState'

export default (state = initialState, action) => {
    switch(action.type) {
        case SEARCH_MOVIE:
            return {
                ...state,
                text: action.text,
                loading: false
            }
        case FETCH_MOVIES:
            return {
                ...state,
                movies: action.movies,
                loading: false
            }
        case FETCH_MOVIE:
            return {
                ...state,
                movie: action.movie,
                loading: false
            }
        case LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state
    }
}
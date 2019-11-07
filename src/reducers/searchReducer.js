import { SEARCH_MOVIE, FETCH_MOVIES } from '../actions/types'
import initialState from './initialState'

export default (state = initialState, action) => {
    switch(action.type) {
        case SEARCH_MOVIE:
            return {
                ...state,
                text: action.payload,
                loading: false
            }
        case FETCH_MOVIES:
            return {
                ...state,
                movies: action.payload
            }
        default:
            return state
    }
}
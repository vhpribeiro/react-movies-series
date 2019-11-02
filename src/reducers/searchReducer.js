import { SEARCH_MOVIE } from '../actions/types'

const initialState = {
    text = '',
    movies = [],
    loading: false,
    movie: []
}

export default (state = initialState, action) {
    switch(action.type) {
        case SEARCH_MOVIE:
            return {
                ...state,
                text: action.payload,
                loading: false
            }
        default:
            return state
    }
}
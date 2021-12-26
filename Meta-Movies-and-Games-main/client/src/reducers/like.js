import {
    ADD_LIKE_MOVIE,
    LIKE_MOVIE_ERROR,
} from '../actions/types';

const initialState = {
    likes: [],
    liked: null,
    loading: true,
    error: {},
};

export default function like(state = initialState, action) {
    const { type, payload} = action;

    switch(type) {
        case ADD_LIKE_MOVIE:
            return {
                ...state,
                likes: [payload, ...state.likes],
                loading: false,
            }
        case LIKE_MOVIE_ERROR:
            return {
                ...state,
                error: payload,
                loading: false,
            }
        default:
            return state;
    }
}
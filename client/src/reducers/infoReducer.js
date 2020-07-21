import { FETCH_INFO } from '../actions/types'

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_INFO:
            return { ...state, ...action.payload }
        default:
            return state;
    }
}
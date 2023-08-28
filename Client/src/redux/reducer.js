import { GET_STARTED } from './actions/action-types'

const initialState = {
    start: false,
}

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_STARTED:
            return {
                ...state,
                start: true,
            }
        case 'CLEAR_CACHE':
            return {
                ...state,
                start: false,
            }
        default:
            return state
    }
}

export default reducer

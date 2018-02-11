import {
    FETCH_COMMODITY_ITEMS,
    FETCH_COMMODITY_ITEMS_FAIL,
    FETCH_COMMODITY_ITEMS_SUCCESS,
} from './constants'

const initialState = {
    data: [],
    errors: {},
    hasFetched: false,
    isFetching: false,
}

export default (
    state = initialState,
    action
) => {
    switch (action.type) {
        case FETCH_COMMODITY_ITEMS:
            return {
                ...state,
                isFetching: true,
            }

        case FETCH_COMMODITY_ITEMS_FAIL:
            return {
                ...state,
                isFetching: false,
                errors: action.error.response.data.errors,
            }

        case FETCH_COMMODITY_ITEMS_SUCCESS:
            return {
                ...state,
                data: action.payload.data.data,
                hasFetched: true,
                isFetching: false,
            }

        default:
            return state
    }
}
